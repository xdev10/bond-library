declare enum CHAIN_ID {
  ETHEREUM_MAINNET = "mainnet",
  GOERLI_TESTNET = "goerli",
}

declare enum CUSTOM_PRICE_FEEDS {
  US_STABLE = "us_stable",
}

declare enum SUPPORTED_LP_TYPES {
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

declare module "require-dir" {
  export default function (
    dir: string,
    opts?: { extensions: string[]; filter: (fullpath: string) => boolean }
  ): { default: any };
}
