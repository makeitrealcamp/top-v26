import mongoose, { Mongoose } from "mongoose";
import CONFIG from "./config";

class Database {
  private connection: Mongoose | null;

  constructor() {
    this.connection = null;
  }

  async connect() {
    if (this.connection) return this.connection;

    return mongoose
      .connect(process.env.DB || "")
      .then((connection) => {
        this.connection = connection;
        console.log("Database connected!!");
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  async disconnect() {
    return mongoose
      .disconnect()
      .then(() => {
        console.log("Database disconnected");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default Database;
