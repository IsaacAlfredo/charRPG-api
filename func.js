import { createRequire } from "module";
import * as fs from "fs";

const require = createRequire(import.meta.url);
const characters = require("./characters.json");

export function createChar(newChar) {
  if (newChar != null) {
    characters.characters.push(newChar);
    const newCharacters = JSON.stringify(characters);

    fs.writeFile("characters.json", newCharacters, (error) => {
      if (error) {
        console.error(error);
        throw error;
      }
    });
  }
}
