import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";

/* 
  Token Template 
  if your adding your protocol's token, check the protocol directory instead!
*/

export default {
  name: "Wrapped Ethereum",
  symbol: "WETH",
  logoUrl: "<your_logo.jpeg>",
  addresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    [CHAIN_ID.GOERLI_TESTNET]: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
  },
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.uniswap.org/#/swap",
    [CHAIN_ID.GOERLI_TESTNET]: "https://app.sushi.com/#/swap",
  },
  priceSources: [
    //Check out our docs for supported price sources and their usage
    { source: "coingecko", apiId: "ethereum" }, //Lower number, higher priority
    //If you need to add a custom price function please check ../custom-price-feeds.ts
    //and refer it here by the name you choose
    { source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE },
  ],
};
