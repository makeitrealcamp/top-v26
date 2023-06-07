import express from "express";
import { createClient } from "redis";

const client = createClient({
  url: "redis://redis-server:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

const app = express();

app.get("/", async (req, res) => {
  await client.connect();
  const characters = await client.get("data-characters");
  const result = JSON.parse(characters);
  console.log("characters", characters);
  await client.disconnect();

  if (characters && characters.length >= 1) {
    return res.send({ from: "redis", ...result });
  } else {
    console.log("entra aca");
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const data = await response.json();
    await client.connect();
    await client.set("data-characters", JSON.stringify(data), { EX: 10 });
    await client.disconnect();
    return res.send(data);
  }
});

app.listen(3000, () => {
  console.log("Server listening");
});
