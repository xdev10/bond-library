import { CustomPriceFunction } from "./types";
//add a cool name to your custom price fetcher
export enum CUSTOM_PRICE_FEEDS {
  US_STABLE = "us_stable",
}

//show your cool name off below along with your coding skills
export default {
  [CUSTOM_PRICE_FEEDS.US_STABLE]: async () => 1.0,
} as { [key: string]: CustomPriceFunction };
