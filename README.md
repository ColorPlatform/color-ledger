# Color Ledger App wrapper

This library helps interfacing with Color Ledger App. It provides a developer friendly interface and user friendly error messages.

## THANK YOU

This library is based on `ledger-Color-js` by Juan Leni who implemented the Color Ledger App. Thank you Juan!

## Install

```bash
yarn add @rnssolution/color-ledger
```

## Usage

### Sign using the Ledger

```js
import Ledger from "@rnssolution/color-ledger"

const signMessage = ... message to sign, generate messages with "@lunie/Cosmos-js"

const ledger = await Ledger().connect()

const signature = await ledger.sign(signMessage)
```

### Using with Color-js

```js
import Ledger from "@rnssolution/color-ledger"
import Color from "@lunie/Cosmos-js"

const privateKey = Buffer.from(...)
const publicKey = Buffer.from(...)

// init Color sender
const Color = Color(STARGATE_URL, ADDRESS)

// create message
const msg = Color
  .MsgSend({toAddress: 'Color1abcd09876', amounts: [{ denom: 'stake', amount: 10 }})

// create a signer from this local js signer library
const ledgerSigner = async (signMessage) => {
  const ledger = await Ledger().connect()
  const publicKey = await ledger.getPubKey()
  const signature = await ledger.sign(signMessage)

  return {
    signature,
    publicKey
  }
}

// send the transaction
const { included }= await msg.send({ gas: 200000 }, ledgerSigner)

// await tx to be included in a block
await included()
```