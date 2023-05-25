import mongoose, { Mongoose } from "mongoose";
import CONFIG from "./config";

class Database {
  private connection: Mongoose | null;

  constructor() {
    this.connection = null;
  }

  connect() {
    if (this.connection) return this.connection;

    return mongoose
      .connect(CONFIG.DB || "")
      .then((connection) => {
        this.connection = connection;
        console.log("Database connected!!");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
}

export default Database;
