const {response} = require("express");
const HttpStatus = require("http-status-codes");
const admin = require("firebase-admin");

export const validateJWT = async (req: any, res = response, next: () => void) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(HttpStatus.UNAUTHORIZED).json({
                ok: false,
                msg: "No hay token en la petición",
            });
        }
        const payload = await admin.auth().verifyIdToken(token, true);
        req.email = payload.email;
        req.uid = payload.uid;

        next();
    } catch (error) {
        return res.status(HttpStatus.UNAUTHORIZED).json({
            ok: false,
            msg: "Token no válido",
        });
    }
};

module.exports = {
    validateJWT,
};
