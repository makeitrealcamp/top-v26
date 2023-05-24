import mongoose, { Mongoose } from "mongoose";
import CONFIG from "./config";

class Database {
  private connection: Mongoose | null;

  constructor() {
    this.connection = null;
  }

  connect() {
    if (this.connection) return this.connection;

    console.log(CONFIG);
    return mongoose
      .connect(CONFIG.DB)
      .then((connection) => {
        this.connection = connection;
        console.log("Conexion a DB exitosa");
      })
      .catch((err: Error) => console.log(err));
  }
}

export default Database;
