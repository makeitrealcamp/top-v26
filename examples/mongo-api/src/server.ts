import app from "./app";
import CONFIG from "./config/config";

app.listen(CONFIG.PORT || 3001, () => {
  console.log("Server initialized on port ", process.env.PORT);
});
