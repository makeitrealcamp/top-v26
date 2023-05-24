import app from "./app";
import config from "./config/config";
import Database from "./config/database";

const database = new Database();
database.connect();

app.listen(process.env.PORT || 3001, () => {
  console.log("Server initialized on port ", process.env.PORT);
});
