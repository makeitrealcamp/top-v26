console.log("Callback...");

const userAllow = (callback) => {
  // ...
  console.log("userAllow..");
  callback();
};

// Despues del login , se consulte si el usuario tiene permisos en algun módulo
const login = (user, passwd, callback, next) => {
  // Simulate http request
  setTimeout(() => {
    console.log("pasó 5 segundos...");
    // Login
    callback(next);
  }, 5000);
};

console.log("paso 1");
login("", "", userAllow, () => console.log("Terminó login..."));
