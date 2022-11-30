import { ethers } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { CHAIN_ID } from "./constants";
import { CustomPriceFunction } from "./types";

//add a cool name to your custom price fetcher
export enum CUSTOM_PRICE_FEEDS {
  US_STABLE = "us_stable",
  PPO = "PPO",
}

//show your cool name off below along with your coding skills
export default {
  [CUSTOM_PRICE_FEEDS.US_STABLE]: async () => 1.0,
  [CUSTOM_PRICE_FEEDS.PPO]: async () => {
    const ORACLE_ABI = ["function getFixedPrice() view returns (uint256)"];
    const ORACLE_ADDRESS = "0x503aef858e26C136C29e40483EA0297160d2BDC0";
    const PRICE_DECIMALS = 6;

    try {
      const defaultProvider = ethers.getDefaultProvider(CHAIN_ID.ARBITRUM_MAINNET);

      const fixedPriceContract = new ethers.Contract(ORACLE_ADDRESS, ORACLE_ABI, defaultProvider);

      const priceBN = await fixedPriceContract.getFixedPrice();

      if (priceBN) return +formatUnits(priceBN, PRICE_DECIMALS);

      throw new Error();
    } catch (e) {
      throw new Error("Error getting custom price for PPO token.");
    }
  },
} as { [key: string]: CustomPriceFunction };
