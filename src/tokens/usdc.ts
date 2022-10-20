import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";
export default {
  name: "USD Coin",
  symbol: "USDC",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/USDC.png",
  addresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    [CHAIN_ID.GOERLI_TESTNET]: "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C",
  },
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/",
    [CHAIN_ID.GOERLI_TESTNET]: "https://app.compound.finance/",
  },
  priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE }],
};
