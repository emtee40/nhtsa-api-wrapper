/**
 * @module api/endpoints/GetAllManufacturers
 * @category API Endpoints
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * `GetAllManufacturers` provides a list of all the Manufacturers available in the vPIC Dataset.
 *
 * `params.manufacturerType` is optional but allows the user to filter the list based on
 * manufacturer type. Types include 'Incomplete Vehicles', 'Completed Vehicle Manufacturer',
 * 'Incomplete Vehicle Manufacturer', 'Intermediate Manufacturer', 'Final-Stage Manufacturer',
 * 'Alterer', or any partial match of those strings.
 *
 * `params.page` is optional and used to specify (n)th page of results. Results are provided in
 * pages of 100 items.
 *
 * @param [params] - Object of Query Search names and values to append to the URL as a query string.
 * - If not providing `params` and want you want to set `doFetch = false`, you can pass `false` as
 * the first arg in place of params, instead of having to pass the first arg as undefined, i.e. you
 * don't have to do this: `func(undefined, doFetch)`, and can instead do this: `func(doFetch)`
 * @param {string} [params.manufacturerType] - See endpoint description
 * @param {(string|number)} [params.page] - Specify page number (results returned 100 at a time)
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetAllManufacturersResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false`
 */

export const GetAllManufacturers = async (
  params?:
    | {
        manufacturerType?: string
        page?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<GetAllManufacturersResults> | string> => {
  const endpointName = 'GetAllManufacturers'

  if (typeof params === 'boolean') {
    doFetch = params
    params = undefined
  }

  try {
    const args: IArgToValidate[] = [
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'manufacturerType',
        value: params?.manufacturerType,
        types: ['string'],
      },
      {
        name: 'page',
        value: params?.page,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, cacheUrl, getCachedUrl } = useNHTSA()

    cacheUrl({ endpointName, params })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

/**
 * Objects found in the NhtsaResponse 'Results' array of GetAllManufacturers endpoint
 *
 * @alias GetAllManufacturersResults
 */
export type GetAllManufacturersResults = {
  Country: string
  Mfr_CommonName: string | null
  Mfr_ID: number
  Mfr_Name: string
  VehicleTypes: Array<{ IsPrimary?: boolean; Name?: string }>
}
