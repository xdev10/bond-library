import { CHAIN_ID, CUSTOM_PRICE_FEEDS } from "../constants";
import { ProtocolDefinition } from "../index";

/* Protocol Template */
export default {
  name: "Redacted",
  description: "Empowering on-chain liquidity, governance and cash-flow for DeFi protocols.", 
  logoUrl: "https://app.redacted.finance/assets/images/tokens/Redacted-TokenIcon-BTRFLY-TransBG-72dpi.png", // 1:1 square logo
  links: {
    // Links to landing page, socials and docs
    governanceVote: "https://commonwealth.im/redacted-cartel/snapshot/redactedcartel.eth/0xa1049118915c1a53ad72cc650b7adfb4f4310ac84cde8d8e93aa7daf18dea441", // A governance proposal related to bonds
    homepage: "https://redacted.finance/",
    twitter: "redactedcartel",
    github: "redacted-cartel",
    medium: "https://mirror.xyz/0xE90c74145245B498fef924fAdC7bb34253c7cF90",
    discord: "https://discord.com/invite/RwghRM6Shf",
    telegram: "",
    staking: "https://app.redacted.finance/lock",
  },
  /*
    The address that should be allowed to spend your payout tokens
    and you'll deploy the market from like a multisig or other contract, or a wallet
  */
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: ["0xa52fd396891e7a74b641a2cb1a6999fcf56b077e"], // Redacted Multisig
  },
  // Tokens specific to your protocol like your governance token or LPs
  // If you're looking to add a strategic asset, stablecoin or an otherwise common base please check the tokens directory
  tokens: [
    {
      // why use many word wen example do trick
      name: "BTRFLY",
      symbol: "BTRFLY",
      logoUrl: "https://app.redacted.finance/assets/images/tokens/Redacted-TokenIcon-BTRFLY-TransBG-72dpi.png",
      // Token contract addresses
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xc55126051B22eBb829D00368f4B12Bde432de5Da",
        [CHAIN_ID.GOERLI_TESTNET]: "0x4bc4bba990fe31d529d987f7b8ccf79f1626e559",
      },
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "https://curve.fi/#/ethereum/pools/factory-crypto-85/swap"
      },
      priceSources: [
        { source: "coingecko", apiId: "redacted" },
      ],
    },
  ],
} as ProtocolDefinition;
