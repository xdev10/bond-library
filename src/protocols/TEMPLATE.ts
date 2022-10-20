import { CHAIN_ID, CUSTOM_PRICE_FEEDS } from "../constants";
import { ProtocolDefinition } from "../index";

/* Protocol Template */
export default {
  name: "", // Your display name, formatted just how you like it
  description: "", // A short protocol description
  logoUrl: "https://your-dao.defi/your-logo.png",
  links: {
    // Links to landing page, socials and docs
    governanceVote: "", // A governance proposal related to bonds
    homepage: "",
    twitter: "",
    github: "",
    medium: "",
    discord: "",
    telegram: "",
    staking: "",
  },
  /*
    The address that should be allowed to spend your payout tokens
    and you'll deploy the market from like a multisig or other contract, or a wallet
  */
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: ["0x007000000000000000000000000000007405C0D3"],
  },
  // Tokens specific to your protocol like your governance token or LPs
  // If you're looking to add a strategic asset, stablecoin or an otherwise common base please check the tokens directory
  tokens: [
    {
      // why use many word wen example do trick
      name: "Wrapped Ether",
      symbol: "WETH",
      logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/WETH.png",
      // Token contract addresses
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        [CHAIN_ID.GOERLI_TESTNET]: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
      },
      purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.uniswap.org/#/swap" }, // Where to acquire your token
      priceSources: [
        // Check out our docs for supported price sources and their usage
        { source: "coingecko", apiId: "ethereum" }, // Lower number, higher priority
        // If you need to add a custom price function please check ../custom-price-feeds.ts
        // and refer it here by the name you choose...
        { source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE },
      ],
    },
  ],
} as ProtocolDefinition;
