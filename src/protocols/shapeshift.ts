//@ts-nocheck
import { ProtocolDefinition } from "../types";
import { CHAIN_ID } from "../constants";

export default {
  name: "ShapeShiftDAO",
  description: "All the wallets. All the chains. All the protocols. Join our vision at ShapeShift.com",
  logoUrl: "https://ipfs.io/ipfs/bafkreibggpxpfxxnxkudvlj5bherkjpjjetzzxbmfaquigbvhqg5xkx4li?filename=fox-token.png",
  links: {
    governanceVote: "https://snapshot.org/#/shapeshiftdao.eth",
    twitter: "https://twitter.com/shapeshift",
    github: "https://github.com/shapeshift",
    medium: "https://medium.com/@shapeshift.com",
    homepage: "https://shapeshift.com/",
    staking: "https://app.shapeshift.com/#/demo/defi/earn",
  },
  issuerAddresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0x90a48d5cf7343b08da12e067680b4c6dbfe551be" },
  tokens: [
    {
      name: "ShapeShift FOX Token",
      symbol: "FOX",
      logoUrl:
        "https://ipfs.io/ipfs/bafkreibggpxpfxxnxkudvlj5bherkjpjjetzzxbmfaquigbvhqg5xkx4li?filename=fox-token.png",
      priceSources: [{ source: "coingecko", apiId: "shapeshift-fox-token" }],
      purchaseLinks: { [CHAIN_ID.ETHEREUM_MAINNET]: "https://app.shapeshift.com/#/demo/trade" },
      addresses: { [CHAIN_ID.ETHEREUM_MAINNET]: "0xc770eefad204b5180df6a14ee197d99d808ee52d" },
    },
  ],
} as ProtocolDefinition;
