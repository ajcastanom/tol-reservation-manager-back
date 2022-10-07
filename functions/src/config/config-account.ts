const serviceAccount = require("../../firebase-admin-sdk-pdn.json");

/**
 * Clase con constantes de configuración
 */
export default class ConfigAccount {
  static getServiceAccount(): any {
    return serviceAccount;
  }

  static getProjectId(): string {
    return `${serviceAccount.project_id}`;
  }

  static getDatabaseURL(): string {
    return `https://${serviceAccount.project_id}.firebaseio.com`;
  }

  static getStorageBucket(): string {
    return `${serviceAccount.storageBucket}`;
  }
}
