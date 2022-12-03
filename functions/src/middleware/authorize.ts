import {Status} from "../enum/status-enum";
import {AuthenticationService} from "../service/authentication-service";
import {ErrorEnum} from "../enum/error-enum";

const {response} = require("express");
const HttpStatus = require("http-status-codes");

export const authorize = (...permissions: string[]) => {
    return async (req: any, res = response, next: () => void) => {
        try {
            const authenticationService = AuthenticationService.getInstance();

            const user = await authenticationService.userByUid(req.uid);
            const rolePermissions = await authenticationService.permissions(user.role);

            const match = permissions.filter(permission => rolePermissions.includes(permission))

            if (match.length == 0) {
                throw new Error(ErrorEnum.UNAUTHORIZED)
            }
            next();
        } catch (error) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                role: Status.FAILED,
                msg: "El usuario no tiene permisos para realizar esta operación",
            });
        }
    };
}

module.exports = {
    authorize,
};
