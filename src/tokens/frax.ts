import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";
export default {
  name: "FRAX",
  symbol: "FRAX",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/FRAX.png",
  priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE }],
  purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/" },
  addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x853d955acef822db058eb8505911ed77f175b99e" },
};
