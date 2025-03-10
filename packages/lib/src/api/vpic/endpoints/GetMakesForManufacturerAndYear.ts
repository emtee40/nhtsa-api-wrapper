/**
 * @module api/vpic/endpoints/GetMakesForManufacturerAndYear
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetMakesForManufacturerAndYear Documentation](/guide/vpic/endpoints/get-makes-for-manufacturer-and-year)
 * :::
 *
 * `GetMakesForManufacturerAndYear` returns all the Makes in the vPIC dataset for a specified
 * `manufacturer`, and whose "Year From" and "Year To" range cover the specified `year`. Multiple
 * results are returned in case of multiple matches.
 *
 * Both `manufacturer` and `params.year` are required.
 *
 * `manufacturer` name can be a partial name, or a full name for more specificity, e.g. "988",
 * "honda", "HONDA OF CANADA MFG., INC.", etc.
 *
 * - If supplied `manufacturer` is a number - method will do exact match on Manufacturer's Id.
 * - If supplied `manufacturer` is a string - it will look for manufacturers whose name is LIKE the
 *   provided name. It accepts a partial manufacturer name as an input.
 *
 * `params.year` must be a number > 2016, years prior to 2016 are not supported according to the
 * NHTSA API. During testing it was found that the API still returns data for years prior to 2016.
 *
 * ::: warning :exclamation: Required Parameters
 * Both `manufacturer` and `params.year` are required.
 *  :::
 *
 * @param {(string|number)} manufacturer - Manufacturer Name (string) or Manufacturer ID (number)
 * @param params - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} params.year - Model year of the vehicle - Number, >= 2016
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults> | string>)} - Api
 * Response `object` -or- url `string` if `doFetch = false`
 */
function GetMakesForManufacturerAndYear(
  manufacturer: string | number,
  params: { year: string | number },
  doFetch?: true
): Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults>>

function GetMakesForManufacturerAndYear(
  manufacturer: string | number,
  params: { year: string | number },
  doFetch: false
): Promise<string>

async function GetMakesForManufacturerAndYear(
  manufacturer: string | number,
  params: {
    year: string | number
  },
  doFetch = true
): Promise<NhtsaResponse<GetMakesForManufacturerAndYearResults> | string> {
  const endpointName = 'GetMakesForManufacturerAndYear'

  try {
    const args: IArgToValidate[] = [
      {
        name: 'manufacturer',
        value: manufacturer,
        required: true,
        types: ['string', 'number'],
      },
      { name: 'params', value: params, required: true, types: ['object'] },
      {
        name: 'year',
        value: params.year,
        required: true,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({
      endpointName,
      path: manufacturer.toString(),
      params,
    })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { GetMakesForManufacturerAndYear }

/**
 * Objects found in the `Results` array of `GetMakesForManufacturerAndYear` endpoint response.
 */
export type GetMakesForManufacturerAndYearResults = {
  MakeId: number
  MakeName: string
  MfrId: number
  MfrName: string
}
