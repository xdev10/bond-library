import { CHAIN_ID } from "../constants";

export default {
  name: "Wrapped Ethereum",
  symbol: "WETH",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/WETH.png",
  priceSources: [{ source: "coingecko", apiId: "ethereum" }],
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.uniswap.org/#/swap",
    [CHAIN_ID.GOERLI_TESTNET]:
      "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6&chainId=5",
  },
  addresses: {
    eth: "",
    [CHAIN_ID.ETHEREUM_MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    [CHAIN_ID.GOERLI_TESTNET]: [
      "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
      "0x8b7fb00abb67ba04ce894b9e2769fe24a8409a6a",
    ],
  },
};
