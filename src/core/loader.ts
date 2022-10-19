import { Token, LpToken, Protocol } from "../types";
import { toTokenFormat, toProtocolFormat, mapReducer } from "./internal/utils";
import protocolData from "./generated/protocols.json";
import tokenData from "./generated/tokens.json";

//Loads all files and converts to original format format
const tokens = tokenData.reduce(toTokenFormat, []);
const { protocols, addresses } = protocolData.reduce(toProtocolFormat, { protocols: [], addresses: [] });

export const TOKENS = new Map<string, Token | LpToken>(tokens.reduce(mapReducer, []));
export const PROTOCOLS = new Map<string, Protocol>(protocols);
export const ADDRESSES = addresses;
