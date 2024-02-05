import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createRequire } from "module";
import { createChar } from "./func.js";

const require = createRequire(import.meta.url);
var cors = require("cors");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//middleware do express para ler JSON do body
app.use(express.json());

//middleware do express para lidar com cors, necessário para aceitar
//requisições de outras fontes
app.use(cors());

//servidor escutando na porta 3000.
app.listen("3000");
console.log("Servidor escutando na porta 3000");

//Rota GET que envia o arquivo JSON do arquivo characters.json
app.route("/").get((req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  res.sendFile(path.join(__dirname, "characters.json"));
});

//Rota POST que aceita um JSON no Body e o adiciona como personagem
//em characters.json
app.post("/create", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  createChar(req.body.character);
  res.send(req.body);
});
