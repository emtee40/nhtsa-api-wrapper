/**
 * @module api/vpic/endpoints/GetVehicleVariableList
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { rejectWithError, validateArgument } from '@/utils'
import type { NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [GetVehicleVariableList Documentation](/guide/vpic/endpoints/get-vehicle-variable-list)
 * :::
 *
 * `GetVehicleVariableList` provides a list of all the Vehicle related variables that are in the
 * vPIC dataset. Information on the name, description and the type of the variable is provided.
 *
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<GetVehicleVariableListResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
function GetVehicleVariableList(
  doFetch?: true
): Promise<NhtsaResponse<GetVehicleVariableListResults>>

function GetVehicleVariableList(doFetch: false): Promise<string>

async function GetVehicleVariableList(
  doFetch = true
): Promise<NhtsaResponse<GetVehicleVariableListResults> | string> {
  const endpointName = 'GetVehicleVariableList'

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

export { GetVehicleVariableList }

/**
 * Objects found in the `Results` array of `GetVehicleVariableList` endpoint response.
 */
export type GetVehicleVariableListResults = {
  DataType: 'string' | 'int' | 'decimal' | 'lookup'
  Description: string
  GroupName: string | null
  ID: number
  Name: string
}
