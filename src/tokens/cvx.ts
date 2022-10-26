import { CHAIN_ID } from "../constants";
export default {
  name: "Convex Finance",
  symbol: "CVX",
  logoUrl: "https://www.convexfinance.com/static/icons/svg/cvx.svg",
  priceSources: [{ source: "coingecko", apiId: "convex-finance" }],
  purchaseLinks: {
    [CHAIN_ID.ETHEREUM_MAINNET]:
      "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B&chainId=1",
  },
  addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b" },
};
