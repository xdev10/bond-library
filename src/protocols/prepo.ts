import { CHAIN_ID } from "../constants";
import CUSTOM_PRICE_FEEDS from "../custom-price-feeds";
import { ProtocolDefinition } from "../types";

export default {
  name: "prePO",
  description: "The Decentralized Exchange for Pre-IPO Stocks & Pre-IDO Tokens.",
  logoUrl: "https://svgshare.com/i/now.svg",
  links: {
    governanceVote: "https://snapshot.org/#/prepo.eth",
    homepage: "https://prepo.io/",
    discord: "https://discord.gg/prePO",
    twitter: "https://twitter.com/prepo_io",
    medium: "https://medium.com/prepo",
    telegram: "https://t.me/prePO_News",
    github: "https://github.com/prepo-io",
  },
  issuerAddresses: { [CHAIN_ID.ARBITRUM_MAINNET]: "0xe5011a7cc5CDA29F02CE341B2847B58abEFA7c26" },
  tokens: [
    {
      name: "prePO Token",
      symbol: "PPO",
      logoUrl: "https://i.imgur.com/NNI5hnR.png",
      priceSources: [{ source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.PPO }],
      purchaseLinks: { [CHAIN_ID.ARBITRUM_MAINNET]: "https://sale.prepo.io/" },
      addresses: { [CHAIN_ID.ARBITRUM_MAINNET]: "0xB40DBBb7931Cfef8Be73AEEC6c67d3809bD4600B" },
    },
  ],
} as ProtocolDefinition;
