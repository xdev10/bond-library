import type { Address, Protocol, Token } from "../types";
import { ADDRESSES, PROTOCOLS, TOKENS } from "./loader";
import { CHAIN_ID } from "../constants";
import { CHAINS } from "./chains";

export function getToken(address: string): Token | null {
  return TOKENS.get(address.toLowerCase()) || null;
}

export const getUniqueApiIds = function (): {
  coingecko: Set<string>;
} {
  const coingecko: Set<string> = new Set();

  for (const token of TOKENS.values()) {
    for (const priceSource of token.priceSources) {
      //@ts-ignore
      priceSource.source === "coingecko" && coingecko.add(priceSource.apiId);
    }
  }

  return {
    coingecko: coingecko,
  };
};

export const getProtocolByAddress = function (address: string, chain: CHAIN_ID | string): Protocol | null {
  address = address.toLowerCase();
  const res = ADDRESSES.filter((obj: Address) => {
    return chain === obj.chainId && obj.address.toLowerCase() === address;
  });
  return PROTOCOLS.get(res[0]?.protocol) || null;
};

export const getAddressesByProtocol = function (protocol: string): Address[] {
  return ADDRESSES.filter((obj: Address) => obj.protocol === protocol);
};

export const getAddressesByChain = function (chainId: CHAIN_ID): string[] {
  const addresses: string[] = [];
  ADDRESSES.forEach((address: Address) => {
    if (address.chainId === chainId) addresses.push(address.address.toLowerCase());
  });
  return addresses;
};

export const getProtocols = function (testnet: boolean): Protocol[] {
  const protocols: Protocol[] = [];
  ADDRESSES.forEach((address: Address) => {
    const protocol = PROTOCOLS.get(address.protocol);

    if (protocol && !protocols.includes(protocol) && !testnet && !CHAINS.get(address.chainId)?.isTestnet) {
      protocols.push(protocol);
    } else if (protocol && !protocols.includes(protocol) && testnet && CHAINS.get(address.chainId)?.isTestnet) {
      protocols.push(protocol);
    }
  });

  return protocols;
};
