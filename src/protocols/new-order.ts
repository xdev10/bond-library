import { CHAIN_ID, SUPPORTED_LP_TYPES } from "../constants";
import { ProtocolDefinition } from "../types";

export default {
  name: "NewOrder",
  description: "A community-led incubation DAO building edge-of-the-edge DeFi products.",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/NEWORDER.png",
  links: {
    governanceVote: "https://snapshot.org/#/neworderdao.xyz",
    twitter: "https://twitter.com/neworderDAO",
    github: "https://github.com/new-order-network",
    medium: "https://medium.com/neworderdao",
    homepage: "https://neworder.network/",
    staking: "https://dao.neworder.network/invest",
    discord: "https://discord.gg/mBdFUVdj",
  },
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: "0x4a848F44146Ca6D1D6AA34bcdF3C41093deF1761",
  },
  tokens: [
    {
      name: "New Order",
      symbol: "NEWO",
      priceSources: [{ source: "coingecko", apiId: "new-order" }],
      logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/NEWORDER.png",
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96&chainId=1",
      },
      addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96" },
    },
    {
      name: "NEWO-USDC SLP",
      symbol: "NEWO-USDC SLP",
      //@ts-ignore
      lpType: SUPPORTED_LP_TYPES.SUSHISWAP,
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xc08ED9a9ABEAbcC53875787573DC32Eee5E43513",
      },
      token0Address: "0x98585dfc8d9e7d48f0b1ae47ce33332cf4237d96".toLowerCase(),
      token1Address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48".toLowerCase(),
      priceSources: [],
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.sushi.com/legacy/add/0x98585dFc8d9e7D48F0b1aE47ce33332CF4237D96/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48?chainId=1",
      },
    },
  ],
} as ProtocolDefinition;
