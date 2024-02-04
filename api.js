import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";
import { createChar } from "./func.js";

const require = createRequire(import.meta.url);
const characters = require("./characters.json");
var cors = require("cors");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//middleware
app.use(express.json());

app.use(cors());

app.listen("3000");

app.route("/").get((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "characters.json"));
});

app.post("/create", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  createChar(req.body.character);
  res.send(req.body);
  console.log(characters);
});
