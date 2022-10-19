# ![logo](assets/logo-24.png) Bond Library

Library containing off-chain details relating to bonds, protocols, tokens, chains etc

- [Protocol Verification](#protocol-verification)
- [Token Verification](#tokens)
- [More Token Verification](#other-tokens)
- [References](#references)

## Introduction

In order for bond markets to appear on the BondProtocol dapp market list, the market owner must have verified their
details with us. In addition to this, the market quote and payout tokens should be verified, so that we can use
off-chain data such as price feeds, token logos and so on in the dapp.

Verification is done by making a pull request to this library. Once we have merged your PR and published the updated version of the library, the dapp will be ready to display your market details.
Follow the guide below and submit a pull request to the `develop` branch.

**If you do not have your own UI or other alternative, we
strongly recommend waiting until it has been accepted before creating a market.**

---

## Verification Guide

You'll find most fields self-explanatory but below is a short guide on filling out the less obvious ones.

_For a detailed explanation on all fields and how they're used, check out_ [our docs 📘](https://docs.bondprotocol.finance/bond-marketplace/market-verification)

## Protocol Verification

Start out by running `yarn protocol your-protocol-name`. It'll generate a file in `src/protocols` from a template that you can start editing with your basic details

### `links` to social media, homepage and governance

```typescript
export default {
  //... your details
  links: {
    // REQUIRED: Link to a governance vote allowing your protocol to run a BondProtocol market
    governanceVote: string;
    homepage?: string;
    //socials...
  };
}
```

> NOTE: the `governanceVote` link is required. We are only able to display markets which are being offered by
> decentralized organizations that have held a vote allowing them to run BondProtocol market programs. Without this link,
> we will be unable to accept your verification request.

**We support a bunch of socials, [check out the full list](#links)**

### `issuerAddresses`

This should be the address(es) you will use to execute the createMarket function on the contract.  
You may have different addresses for different markets, markets on mainnet and testnet, or in the future, markets on multiple chains.

```typescript
export default {
  //... your details
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: '0x0070000000000000000000000000000000000000',
    [CHAIN_ID.GOERLI_TESTNET]: [
    '0x0070000000000000000000000000000000001337',
    '0x0070000000000000000000000000000000000420'
    ]
  };
}
```

> You must use `CHAIN_ID` to name your properties and make our lives easier, check them out [here](#chain_id)

---

### `tokens`

Token verification allows us to use off-chain token data such as prices and logos. The most important part of token verification is
providing a price source. Failure to do this will mean bond prices, discounts and so on will be displayed incorrectly in
the dapp. The bonds will still work as expected on the contract level, but users would have to calculate prices and
discounts manually.

> If you're looking to add a token not related to your protocol check out [this section](#other-tokens)

Add tokens, like your governance token or LP, to the `tokens` array property as an object:

> NOTE: If you're adding an LP token, you should also ensure both tokens in the pair have been added.

```typescript
export default {
  //... your details
  tokens: [
    {
      name: "Wrapped Ether", // The token name
      symbol: "WETH", // The token symbol
      logoUrl: "<HTTPS://YOUR_LOGO.PNG>", // A URL to the token logo, preferably .png
    },
  ],
};
```

### `priceSources` to fetch your token's price

Used to get token prices and perform bond discount calculations.

```typescript
export default {
  tokens: [
    {
      //... token details,
      priceSources: [
        // we load and prioritze by insertion order, first entry gets loaded first and so on
        { source: "coingecko", apiId: "olympus" },
        {
          source: "custom",
          customPriceFunction: async () => await fetch() /*...*/,
        },
      ],
    },
  ],
};
```

We currently only support Coingecko or a custom price fetch function.

### `addresses` of your ERC20 token contracts

```typescript
export default {
  tokens: [
    {
      //... token details
      addresses: [
        {
          [CHAIN_ID.ETHEREUM_MAINNET]: "0x0070000000000000000000000000000000000000",
        },
      ],
    },
  ],
};
```

#### Adding LP Tokens? [Check out how here](https://docs.bondprotocol.finance/bond-marketplace/market-verification/token-verification/lp-tokens)

> #### Note for LP Tokens
>
> The `name` and `symbol` fields allow the on-chain values to be overridden for more useful UI display. For example, most
> LP tokens use a default "Uniswap V2"/"UNI-V2" name and symbol, which isn't very helpful if multiple LP tokens are being
> displayed in a list. So these could be overridden as "ETH-GOHM Uniswap LP"/"ETH-GOHM" in our UI, for example.

After adding this, your PR should be ready, once we have accepted it, your token data will be available for the BondProtocol
dapp UI to use.

---

## Other Tokens

If there's a token you'd like to bond but we still haven't added yet, like a stablecoin or a strategic asset, you can add them too!

Run `yarn token token_name` to generate a token file that you can edit! They follow the exact same structure of [token](#tokens).

## References

### `CHAIN_ID`

A list of currently supported chains

```typescript
enum CHAIN_ID {
  ETHEREUM_MAINNET,
  GOERLI_TESTNET,
}
```

### `Links`

```typescript
interface Links {
  governanceVote: string;
  homepage?: string;
  twitter?: string;
  discord?: string;
  github?: string;
  medium?: string;
  telegram?: string;
  staking?: string;
}
```

### `PriceSources`

```typescript
interface PriceSource {
  source: "coingecko" | "custom";
  priority: number;
}

interface SupportedPriceSource extends PriceSource {
  source: "coingecko";
  apiId: string; // The token's Coingecko API ID
}

interface CustomPriceSource extends PriceSource {
  source: "custom";
  customPriceFunction: () => Promise<string>;
}
```
