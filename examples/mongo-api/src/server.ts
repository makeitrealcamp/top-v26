import app from "./app";
import CONFIG from "./config/config";
import Database from "./config/database";

// const database = new Database();
// database.connect();

app.listen(CONFIG.PORT || 3001, () => {
  console.log("Server initialized on port ", process.env.PORT);
});
