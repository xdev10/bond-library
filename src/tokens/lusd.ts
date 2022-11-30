import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";
export default {
  name: "Liquity USD",
  symbol: "LUSD",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/LUSD.png",
  priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE }],
  purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/#/ethereum/pools/lusd/swap" },
  addresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
  },
};
