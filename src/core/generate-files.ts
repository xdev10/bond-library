import fs from "fs";
import requireDir from "require-dir";
import { protocols as testProtocols } from "./internal/test-protocols";

//Loads all default imports from a directory as an object[]
const loadDir = (dir: string) =>
  Object.values(
    requireDir(dir, {
      extensions: [".ts"],
      filter: (fullpath: string) => !fullpath.includes("TEMPLATE"),
    })
  ).map((d) => d.default);

const protocols = loadDir("../protocols").concat(testProtocols);

//Get tokens defined in protocol files
const protocolTokens = protocols.flatMap(({ tokens }) => tokens).filter((t) => !!t);

//Load base tokens and merge with protocol tokens
const tokens = loadDir("../tokens").concat(protocolTokens);

if (!fs.existsSync(__dirname + "/generated")) {
  fs.mkdirSync(__dirname + "/generated");
}

fs.writeFileSync(__dirname + "/generated/tokens.json", JSON.stringify(tokens));
fs.writeFileSync(__dirname + "/generated/protocols.json", JSON.stringify(protocols));
