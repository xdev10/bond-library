import { CHAIN_ID, CUSTOM_PRICE_FEEDS } from "../constants";
import { ProtocolDefinition } from "../index";

/* Protocol Template */
export default {
  name: "GMX", // Your display name, formatted just how you like it
  description: "GMX is a decentralized spot and perpetual exchange.", // A short protocol description
  logoUrl: "https://assets.coingecko.com/coins/images/18323/large/arbit.png?1631532468",
  links: {
    // Links to landing page, socials and docs
    governanceVote: "https://medium.com/@gmx.io/gmx-update-2-4f6e0f75e0ce", // A governance proposal related to bonds
    homepage: "https://gmx.io/#/",
    twitter: "https://twitter.com/GMX_IO",
    github: "https://github.com/gmx-io",
    medium: "https://medium.com/@gmx.io",
    discord: "https://discord.com/invite/cxjZYR4gQK",
    telegram: "https://t.me/GMX_IO",
    staking: "",
  },
  /*
    The address that should be allowed to spend your payout tokens
    and you'll deploy the market from like a multisig or other contract, or a wallet
  */
  issuerAddresses: {
    [CHAIN_ID.ARBITRUM_MAINNET]: ["0xea8a734db4c7EA50C32B5db8a0Cb811707e8ACE3"],
  },
  // Tokens specific to your protocol like your governance token or LPs
  // If you're looking to add a strategic asset, stablecoin or an otherwise common base please check the tokens directory
  tokens: [
    {
      // why use many word wen example do trick
      name: "GMX",
      symbol: "GMX",
      logoUrl: "https://assets.coingecko.com/coins/images/18323/small/arbit.png?1631532468",
      // Token contract addresses
      addresses: {
        [CHAIN_ID.ARBITRUM_MAINNET]: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
      },
      purchaseLinks: { [CHAIN_ID.ARBITRUM_MAINNET]: "https://app.gmx.io/#/buy_gmx" }, // Where to acquire your token
      priceSources: [
        // Check out our docs for supported price sources and their usage
        { source: "coingecko", apiId: "gmx" }, // Lower number, higher priority
      ],
    },
  ],
} as ProtocolDefinition;
