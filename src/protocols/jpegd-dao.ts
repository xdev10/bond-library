import { CHAIN_ID, SUPPORTED_LP_TYPES } from "../constants";
import { ProtocolDefinition } from "../types";

export default {
  name: "JPEG'd DAO",
  description: "Bridging the gap between DeFi and NFTs",
  logoUrl: "https://cdn.jpegd.io/static/logos/JPEGD_LOGO.svg",
  links: {
    governanceVote: "https://snapshot.org/#/jpeg%E2%80%99d.eth",
    twitter: "https://twitter.com/JPEGd_69",
    github: "https://github.com/jpegd",
    medium: "https://medium.com/@jpegd",
    homepage: "https://jpegd.io/",
    staking: "https://jpegd.io/pools",
    discord: "https://discord.com/invite/jpegd",
  },
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0x51C2cEF9efa48e08557A361B52DB34061c025a1B",
  },
  tokens: [
    {
      name: "JPEG'd",
      symbol: "JPEG",
      priceSources: [{ source: "coingecko", apiId: "jpeg-d" }],
      logoUrl: "https://cdn.jpegd.io/static/logos/JPEG.png",
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3&chainId=1",
      },
      addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3" },
    },
    {
      name: "WETH-JPEG SLP",
      symbol: "WETH-JPEG SLP",
      lpType: SUPPORTED_LP_TYPES.SUSHISWAP,
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xdb06a76733528761eda47d356647297bc35a98bd",
      },
      token0Address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2".toLowerCase(),
      token1Address: "0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3".toLowerCase(),
      priceSources: [],
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.sushi.com/legacy/add/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/0xE80C0cd204D654CEbe8dd64A4857cAb6Be8345a3?chainId=1",
      },
    },
  ],
} as ProtocolDefinition;
