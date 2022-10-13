import ConfigAccount from "../config/config-account";

export const firebaseConfig = {
  apiKey: ConfigAccount.getServiceAccount().api_key,
  authDomain: ConfigAccount.getAuthDomain(),
  projectId: ConfigAccount.getServiceAccount().project_id,
  storageBucket: ConfigAccount.getStorageBucket(),
  messagingSenderId: ConfigAccount.getServiceAccount().messaging_sender_id,
  appId: ConfigAccount.getServiceAccount().app_id,
  measurementId: ConfigAccount.getServiceAccount().measurement_id,
};

export const corsOptionsDelegate = (req: any, callback: any) => {
  let corsOptions = null;
  const whiteList = [
    "https://tolreservationmanager.web.app",
  ];

  if (whiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {origin: true}; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {origin: false}; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
