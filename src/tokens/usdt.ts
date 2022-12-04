import { CUSTOM_PRICE_FEEDS, CHAIN_ID } from "../constants";
export default {
  name: "Tether USD",
  symbol: "USDT",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/USDT.png",
  priceSources: [{ source: "coingecko", apiId: "tether" }],
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/",
    [CHAIN_ID.GOERLI_TESTNET]: "https://app.compound.finance/",
  },
  addresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    [CHAIN_ID.GOERLI_TESTNET]: "0x79C950C7446B234a6Ad53B908fBF342b01c4d446",
  },
};
