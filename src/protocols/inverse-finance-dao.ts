import { CHAIN_ID } from "../constants";
import { ProtocolDefinition } from "../index";

export default {
  name: "InverseFinance",
  description:
    "Inverse is part of the new wave of decentralized banking and finance, with at its core the innovative DOLA stablecoin.",
  logoUrl: "https://assets.coingecko.com/coins/images/14205/large/inverse_finance.jpg?1614921871",
  links: {
    governanceVote: "https://www.inverse.finance/governance/proposals/mills/64",
    twitter: "https://twitter.com/InverseFinance",
    discord: "https://discord.gg/YpYJC7R5nv",
    telegram: "https://t.me/InverseFinance",
    github: "https://github.com/InverseFinance",
    medium: "https://www.inverse.finance/blog/en-US",
    homepage: "https://www.inverse.finance",
    staking: "https://www.inverse.finance/stake",
  },
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: ["0x4b6c63E6a94ef26E2dF60b89372db2d8e211F1B7"],
  },
  tokens: [
    {
      name: "DOLA",
      symbol: "DOLA",
      logoUrl: "https://assets.coingecko.com/coins/images/14287/small/anchor-logo-1-200x200.png?1615275005",
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0x865377367054516e17014CcdED1e7d814EDC9ce4",
      },
      purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://inverse.finance/swap" }, // Where to acquire your token
      priceSources: [{ source: "coingecko", apiId: "dola-usd" }],
    },
    {
      name: "Inverse DAO",
      symbol: "INV",
      logoUrl: "https://assets.coingecko.com/coins/images/14205/small/inverse_finance.jpg?1614921871",
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
      },
      purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.1inch.io/#/1/unified/swap/DAI/INV" }, // Where to acquire your token
      priceSources: [
        { source: "coingecko", apiId: "inverse-finance", priority: 0 }, //Lower number, higher priority
      ],
    },
  ],
} as ProtocolDefinition;
