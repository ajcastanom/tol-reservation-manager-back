export const firebaseConfig = {
  apiKey: "AIzaSyACHFcdFs0zMlzxelJIhNNZ7ceHspX0G28",
  authDomain: "tolrevervationmanager.firebaseapp.com",
  projectId: "tolrevervationmanager",
  storageBucket: "tolrevervationmanager.appspot.com",
  messagingSenderId: "244025730996",
  appId: "1:244025730996:web:e47a04fcf8511ef008f4e1",
  measurementId: "G-NL82JLF780"
};

export const corsOptionsDelegate = (req: any, callback: any) => {
  let corsOptions = null;
  const whiteList = [
    "https://gdocumentlicense.web.app"
  ];

  if (whiteList.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {origin: true}; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = {origin: false}; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};
