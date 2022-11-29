import { CUSTOM_PRICE_FEEDS } from "./custom-price-feeds";
export { CUSTOM_PRICE_FEEDS };

export enum CHAIN_ID {
  ETHEREUM_MAINNET = "mainnet",
  GOERLI_TESTNET = "goerli",
  ARBITRUM_MAINNET = "arbitrum",
  ARBITRUM_GOERLI_TESTNET = "arbitrum-goerli",
}

export enum SUPPORTED_LP_TYPES {
  CAKE_LP,
  DODO,
  G_UNI,
  HYPERVISOR,
  ICHI_VAULT,
  SUSHISWAP,
  UNISWAP_V2,
  V_FLOAT,
  VOLATILE_V1_AMM,
}
