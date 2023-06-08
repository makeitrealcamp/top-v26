import express from "express";
import { createClient } from "redis";

const client = createClient({
  url: "redis://redis-server:6379",
});

client.on("error", (err) => console.log("Redis Client Error", err));

const app = express();

app.get("/", async (req, res) => {
  // redis cache
  await client.connect();
  const characters = await client.get("characters");
  const jsonCharacters = JSON.parse(characters);
  await client.disconnect();

  // Exist data in redis
  if (jsonCharacters && jsonCharacters.length >= 1) {
    return res.json(jsonCharacters);
  }

  const url = "https://rickandmortyapi.com/api/character";
  const respose = await fetch(url);
  const data = await respose.json();

  // save data in redis
  await client.connect();
  await client.set("characters", JSON.stringify({ from: "redis", ...data }));
  await client.disconnect();
  res.send(data);
});

app.listen(4000, () => {
  console.log("Server initilized!");
});
