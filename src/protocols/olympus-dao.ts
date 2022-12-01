import { ProtocolDefinition } from "../types";
import { CHAIN_ID } from "../constants";

export default {
  name: "OlympusDAO",
  description: "The Future Decentralized Reserve Currency",
  logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/OLYMPUSDAO.png",
  links: {
    governanceVote: "https://snapshot.org/#/olympusdao.eth",
    twitter: "https://twitter.com/olympusdao",
    github: "https://github.com/OlympusDAO",
    medium: "https://medium.com/@olympusdao",
    homepage: "https://olympusdao.finance/",
    staking: "https://app.olympusdao.finance/#/stake",
  },
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: [
      "0x245cc372C84B3645Bf0Ffe6538620B04a217988B",
      "0x6369ce7668F9791fB80DD8E1932A945497D71e16",
      "0xbb47C3FFf4eF85703907d3ffca30de278b85df3f",
    ],
    [CHAIN_ID.GOERLI_TESTNET]: ["0x19518E4D4E542f4b0Fc27366C23FaC7a0bA491Da"],
    [CHAIN_ID.ARBITRUM_GOERLI_TESTNET]: ["0x19518E4D4E542f4b0Fc27366C23FaC7a0bA491Da"],
  },
  tokens: [
    {
      name: "Olympus",
      symbol: "OHM",
      logoUrl: "https://storageapi.fleek.co/fc635ae1-c8aa-4181-b7db-801a533b8fa9-bucket/OLYMPUSDAO.png",
      priceSources: [{ source: "coingecko", apiId: "olympus" }],
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        [CHAIN_ID.GOERLI_TESTNET]: "0x0595328847af962f951a4f8f8ee9a3bf261e4f6b",
        [CHAIN_ID.ARBITRUM_GOERLI_TESTNET]: "0x6Cec0Ba158fd0C8BC48eafa11f8560318B32258D",
      },
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        [CHAIN_ID.GOERLI_TESTNET]: "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
        [CHAIN_ID.ARBITRUM_GOERLI_TESTNET]:
          "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
      },
    },
    {
      name: "Governance OHM",
      symbol: "GOHM",
      priceSources: [{ source: "coingecko", apiId: "governance-ohm" }],
      addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f" },
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.uniswap.org/#/swap?inputCurrency=0x0ab87046fbb341d058f17cbc4c1133f25a20a52f&outputCurrency=ETH",
      },
    },
  ],
} as ProtocolDefinition;
