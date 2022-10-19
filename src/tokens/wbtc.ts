import { CHAIN_ID } from "../constants";
export default {
  name: "Wrapped Bitcoin",
  symbol: "WBTC",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/WBTC.png",
  priceSources: [{ source: "coingecko", apiId: "wrapped-bitcoin" }],
  purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/" },
  addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599" },
};
