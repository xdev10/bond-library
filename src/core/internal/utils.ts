import type { SupportedPriceSource, CustomPriceSource } from "../../types";
import customFeeds from "../../custom-price-feeds";

export const mapReducer = (arr: any, [keys, val]: any) => [
  ...arr,
  ...(Array.isArray(keys) ? [...keys.map((key) => [key, val])] : [[keys, val]]),
];

export const toPriceSources = (priceSource: SupportedPriceSource | CustomPriceSource) => {
  if (priceSource.source === "custom") {
    //@ts-ignore (aphex) -> to improve but priceSource is intentionally a string instead of a function
    return { source: priceSource.source, customPriceFunction: customFeeds[priceSource.customPriceFunction] };
  }
  return priceSource;
};

export const getPurchaseLinks = (links: { [key: string]: string }) => {
  const chains = Object.keys(links);
  return chains.map((chainId) => [chainId, links[chainId]]);
};

//Transforms tokens into library expected format
export const toTokenFormat = (tokens: any[], token: any) => {
  const { addresses, purchaseLinks, ...details } = token;

  const formattedAddresses = Object.keys(addresses).flatMap((chain) => {
    const address = addresses[chain];
    if (Array.isArray(address)) {
      return address.map((a) => (chain + "_" + a).toLowerCase());
    }
    return (chain + "_" + address).toLowerCase();
  });

  //@ts-ignore
  const links = purchaseLinks ? new Map(getPurchaseLinks(purchaseLinks)) : new Map();

  const priceSources = details.priceSources.map(toPriceSources);

  return [...tokens, [formattedAddresses, { ...details, priceSources, purchaseLinks: links }]];
};

//Transforms protocols into protocol format and extracts protocol specific tokens
export const toProtocolFormat = (acc: any, protocol: any) => {
  const { protocols, addresses } = acc;
  const { issuerAddresses, tokens, ...info } = protocol;

  const newAddresses = Object.keys(issuerAddresses).flatMap((chainId) => {
    const toVerifiedFormat = (address: string) => ({ address, chainId, protocol: info.name });
    const address = issuerAddresses[chainId];
    return Array.isArray(address) ? address.map(toVerifiedFormat) : [toVerifiedFormat(address)];
  });

  return {
    protocols: [...protocols, [info.name, { ...info, id: info.name }]],
    addresses: [...addresses, ...newAddresses],
  };
};
