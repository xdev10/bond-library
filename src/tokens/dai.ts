import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";

export default {
  name: "DAI",
  symbol: "DAI",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/DAI.png",
  priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE }],
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/",
    [CHAIN_ID.GOERLI_TESTNET]: "https://app.compound.finance/",
  },
  addresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0x6b175474e89094c44da98b954eedeac495271d0f",
    [CHAIN_ID.GOERLI_TESTNET]: "0x2899a03ffdab5c90badc5920b4f53b0884eb13cc",
  },
};
