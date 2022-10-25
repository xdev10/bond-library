import { CHAIN_ID } from "../constants";
export default {
  name: "JPEG'd",
  symbol: "JPEG",
  logoUrl: "https://cdn.jpegd.io/static/logos/JPEG.png",
  priceSources: [{ source: "coingecko", apiId: "jpeg-d" }],
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]:
      "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3&chainId=1",
  },
  addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3" },
};
