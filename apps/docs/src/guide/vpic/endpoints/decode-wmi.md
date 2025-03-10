# DecodeWMI

---

```typescript
async function DecodeWMI(
  WMI: string,
  doFetch?: boolean
) => Promise<NhtsaResponse<DecodeWMIResults> | string>
```

::: tip :bulb: More In Depth
See: [Package Reference](../../../typedoc/api/vpic/endpoints/DecodeWMI)
:::

## Description

`DecodeWMI` provides information on the World Manufacturer Identifier for a specific `WMI` code.

`WMI` may be provided as either 3 characters representing VIN position 1-3 _or_ 6 characters
representing VIN positions 1-3 & 12-14.

- Examples: "JTD" "1T9131"

A list of WMI codes can be found
[here](<https://en.wikibooks.org/wiki/Vehicle_Identification_Numbers_(VIN_codes)/World_Manufacturer_Identifier_(WMI)>),
but keep in mind that not all of the listed WMIs are registered with NHTSA and therefore may not
be available in VPIC data sets.

## Parameters

| Name       | Type      | Default value | Description                                                        |
| :--------- | :-------- | :------------ | :----------------------------------------------------------------- |
| `WMI`      | `string`  | `undefined`   | World Manufacturer Identifier                                      |
| `doFetch?` | `boolean` | `true`        | Whether to fetch the data or just return the URL (default: `true`) |

::: warning 📝 NOTE

Set `doFetch` to `false` if you want to fetch the data yourself.

- See [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
  for more info.

:::

## Returns

Returns a Promise that resolves to a **_single_** NhtsaResponse object of type
[DecodeWMIResults](#type-decodewmiresults) in the `Results` key.

```typescript
=> Promise<NhtsaResponse<DecodeWMIResults>>
```

```typescript [NhtsaResponse]
interface NhtsaResponse<DecodeWMIResults> = {
  Count: number
  Message: string
  Results: Array<DecodeWMIResults>
  SearchCriteria: string
}
```

::: details :mag: Click to Show Full Example Response
<<< @/snippets/endpoints/decode-wmi.ts#example-response
:::

### If `doFetch` is set to `false`

Returns the URL string that can be used to fetch the data, does _not_ fetch the data internally.

```typescript
=> Promise<string>

// ex: => 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeWMI/WVW?format=json'
```

::: tip :bulb: See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)
:::

## Type - DecodeWMIResults

Ƭ **DecodeWMIResults**: `Object`

Object returned in the `Results` array of `DecodeWMI` endpoint response.

In the return object, `Results` will be an array with a _single_ object of type
`DecodeWMIResults`.

<<< @/snippets/endpoints/decode-wmi.ts#type-results

## Examples

::: tip Examples 1-2:

- Fetches data from VPIC API

- Returns:

```typescript
=> Promise<NhtsaResponse<DecodeWMIResults>>
```

:::

### Example 1: Decode WMI

```ts
import { DecodeWMI } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeWMI('WVW')
```

### Example 2: Decode WMI and doFetch = true

```ts
import { DecodeWMI } from '@shaggytools/nhtsa-api-wrapper'

const response = await DecodeWMI('1CG', true)
```

::: tip Example 3:

- Does _NOT_ fetch data from VPIC API

- See: [BYOF - Bring Your Own Fetch](../../bring-your-own-fetch.md#option-1-set-dofetch-to-false)

- Returns:

```typescript
=> Promise<string>
```

:::

### Example 3: Decode WMI and doFetch = false

```ts
import { DecodeWMI } from '@shaggytools/nhtsa-api-wrapper'

const url = await DecodeWMI('WAU', false)

// url = 'https://vpic.nhtsa.dot.gov/api/vehicles/DecodeWMI/WAU?format=json'
```
