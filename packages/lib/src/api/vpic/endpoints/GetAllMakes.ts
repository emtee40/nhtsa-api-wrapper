/**
 * @module api/vpic/endpoints/GetAllMakes
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { rejectWithError, validateArgument } from '@/utils'
import type { NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetAllMakes Documentation](/guide/vpic/endpoints/get-all-makes)
 * :::
 *
 * `GetAllMakes` provides a list of all the Makes available in the vPIC Dataset.
 * Each object in the `Results` array represents the `Make_ID` and the `Make_Name` of
 * an individual vehicle Make.
 *
 * - FYI there are over 10,000 registered makes in the database!
 *
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetAllMakesResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
function GetAllMakes(doFetch?: true): Promise<NhtsaResponse<GetAllMakesResults>>

function GetAllMakes(doFetch: false): Promise<string>

/* Implementation */
async function GetAllMakes(
  doFetch = true
): Promise<NhtsaResponse<GetAllMakesResults> | string> {
  const endpointName = 'GetAllMakes'

  try {
    validateArgument({
      name: 'doFetch',
      value: doFetch,
      types: ['boolean'],
    })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetAllMakes }

/**
 * Objects found in the `Results` array of `GetAllMakes` endpoint response.
 */
export type GetAllMakesResults = {
  Make_ID: number
  Make_Name: string
}
