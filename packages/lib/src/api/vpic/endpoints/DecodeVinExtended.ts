/**
 * @module api/vpic/endpoints/DecodeVinExtended
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [DecodeVinExtended Documentation](/guide/vpic/endpoints/decode-vin-extended)
 * :::
 *
 * `DecodeVinExtended` decodes a Vehicle Identification Number (VIN) and returns useful information
 * about the vehicle.
 *
 * This endpoint is similar to `DecodeVin` but returns additional information on variables related
 * to other NHTSA programs like the
 * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa).
 *
 * Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
 * older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
 * the model year is known at the time of decoding, but it is not required.
 *
 * This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
 *   - Ex: 5UXWX7C5*BA
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a `*` could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary
 *
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param [params] - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} [params.modelYear] - Optional Model Year search parameter
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeVinExtendedResults> | string>)} - Api Response `object`
 * -or- url `string` if `doFetch = false` (default: `true`)
 */
function DecodeVinExtended(
  vin: string
): Promise<NhtsaResponse<DecodeVinExtendedResults>>

function DecodeVinExtended(
  vin: string,
  doFetch: true,
  _dummy?: undefined
): Promise<NhtsaResponse<DecodeVinExtendedResults>>

function DecodeVinExtended(
  vin: string,
  doFetch: false,
  _dummy?: undefined
): Promise<string>

function DecodeVinExtended(
  vin: string,
  params: { modelYear?: string | number },
  doFetch: false
): Promise<string>

function DecodeVinExtended(
  vin: string,
  params?: { modelYear?: string | number },
  doFetch?: true
): Promise<NhtsaResponse<DecodeVinExtendedResults>>

/* Implementation */
async function DecodeVinExtended(
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<DecodeVinExtendedResults> | string> {
  const endpointName = 'DecodeVinExtended'

  try {
    if (typeof params === 'boolean') {
      doFetch = params
      params = undefined
    }

    const args: IArgToValidate[] = [
      { name: 'vin', value: vin, required: true, types: ['string'] },
      { name: 'params', value: params, types: ['object'] },
      {
        name: 'modelYear',
        value: params?.modelYear,
        types: ['string', 'number'],
      },
    ]
    catchInvalidArguments({ args })

    const { get, createCachedUrl, getCachedUrl } = useNHTSA()

    createCachedUrl({ endpointName, path: vin, params })

    if (!doFetch) {
      return getCachedUrl()
    } else {
      return get()
    }
  } catch (error) {
    return rejectWithError(error)
  }
}

export { DecodeVinExtended }

/**
 * Objects in the `Results` array of `DecodeVinExtended` endpoint response.
 */
export type DecodeVinExtendedResults = {
  Value: string | null
  ValueId: string | null
  Variable: DecodeVinExtendedVariable
  VariableId: number
}

/**
 * Possible `DecodeVinExtendedResults.Variable` values for DecodeVinExtended endpoint.
 *
 * This type is here to provide a list of possible values manually extracted from an actual API
 * response. There are some things to note:
 * - Names are ordered to mirror actual API response order.
 * - Names have been known to change slightly or be added/removed.
 * - Some listed here could be missing from the API response.
 * - There may be more actual values than listed here.
 *
 * Last Updated: 02/14/2023
 */
export type DecodeVinExtendedVariable =
  | 'Suggested VIN'
  | 'Error Code'
  | 'Possible Values'
  | 'Additional Error Text'
  | 'Error Text'
  | 'Vehicle Descriptor'
  | 'Destination Market'
  | 'Make'
  | 'Manufacturer Name'
  | 'Model'
  | 'Model Year'
  | 'Plant City'
  | 'Series'
  | 'Trim'
  | 'Vehicle Type'
  | 'Plant Country'
  | 'Plant Company Name'
  | 'Plant State'
  | 'Trim2'
  | 'Series2'
  | 'Note'
  | 'Base Price ($)'
  | 'Non-Land Use'
  | 'Body Class'
  | 'Doors'
  | 'Windows'
  | 'Wheel Base Type'
  | 'Track Width (inches)'
  | 'Gross Vehicle Weight Rating From'
  | 'Bed Length (inches)'
  | 'Curb Weight (pounds)'
  | 'Wheel Base (inches) From'
  | 'Wheel Base (inches) To'
  | 'Gross Combination Weight Rating From'
  | 'Gross Combination Weight Rating To'
  | 'Gross Vehicle Weight Rating To'
  | 'Bed Type'
  | 'Cab Type'
  | 'Trailer Type Connection'
  | 'Trailer Body Type'
  | 'Trailer Length (feet)'
  | 'Other Trailer Info'
  | 'Number of Wheels'
  | 'Wheel Size Front (inches)'
  | 'Wheel Size Rear (inches)'
  | 'Entertainment System'
  | 'Steering Location'
  | 'Number of Seats'
  | 'Number of Seat Rows'
  | 'Transmission Style'
  | 'Transmission Speeds'
  | 'Drive Type'
  | 'Axles'
  | 'Axle Configuration'
  | 'Brake System Type'
  | 'Brake System Description'
  | 'Other Battery Info'
  | 'Battery Type'
  | 'Number of Battery Cells per Module'
  | 'Battery Current (Amps) From'
  | 'Battery Voltage (Volts) From'
  | 'Battery Energy (kWh) From'
  | 'EV Drive Unit'
  | 'Battery Current (Amps) To'
  | 'Battery Voltage (Volts) To'
  | 'Battery Energy (kWh) To'
  | 'Number of Battery Modules per Pack'
  | 'Number of Battery Packs per Vehicle'
  | 'Charger Level'
  | 'Charger Power (kW)'
  | 'Engine Number of Cylinders'
  | 'Displacement (CC)'
  | 'Displacement (CI)'
  | 'Displacement (L)'
  | 'Engine Stroke Cycles'
  | 'Engine Model'
  | 'Engine Power (kW)'
  | 'Fuel Type - Primary'
  | 'Valve Train Design'
  | 'Engine Configuration'
  | 'Fuel Type - Secondary'
  | 'Fuel Delivery / Fuel Injection Type'
  | 'Engine Brake (hp) From'
  | 'Cooling Type'
  | 'Engine Brake (hp) To'
  | 'Electrification Level'
  | 'Other Engine Info'
  | 'Turbo'
  | 'Top Speed (MPH)'
  | 'Engine Manufacturer'
  | 'Pretensioner'
  | 'Seat Belt Type'
  | 'Other Restraint System Info'
  | 'Curtain Air Bag Locations'
  | 'Seat Cushion Air Bag Locations'
  | 'Front Air Bag Locations'
  | 'Knee Air Bag Locations'
  | 'Side Air Bag Locations'
  | 'Anti-lock Braking System (ABS)'
  | 'Electronic Stability Control (ESC)'
  | 'Traction Control'
  | 'Tire Pressure Monitoring System (TPMS) Type'
  | 'Active Safety System Note'
  | 'Auto-Reverse System for Windows and Sunroofs'
  | 'Automatic Pedestrian Alerting Sound (for Hybrid and EV only)'
  | 'Event Data Recorder (EDR)'
  | 'Keyless Ignition'
  | 'SAE Automation Level From'
  | 'SAE Automation Level To'
  | 'NCSA Body Type'
  | 'NCSA Make'
  | 'NCSA Model'
  | 'NCSA Note'
  | 'Adaptive Cruise Control (ACC)'
  | 'Crash Imminent Braking (CIB)'
  | 'Blind Spot Warning (BSW)'
  | 'Forward Collision Warning (FCW)'
  | 'Lane Departure Warning (LDW)'
  | 'Lane Keeping Assistance (LKA)'
  | 'Backup Camera'
  | 'Parking Assist'
  | 'Bus Length (feet)'
  | 'Bus Floor Configuration Type'
  | 'Bus Type'
  | 'Other Bus Info'
  | 'Custom Motorcycle Type'
  | 'Motorcycle Suspension Type'
  | 'Motorcycle Chassis Type'
  | 'Other Motorcycle Info'
  | 'Dynamic Brake Support (DBS)'
  | 'Pedestrian Automatic Emergency Braking (PAEB)'
  | 'Automatic Crash Notification (ACN) / Advanced Automatic Crash Notification (AACN)'
  | 'Daytime Running Light (DRL)'
  | 'Headlamp Light Source'
  | 'Semiautomatic Headlamp Beam Switching'
  | 'Adaptive Driving Beam (ADB)'
  | 'Rear Cross Traffic Alert'
  | 'Rear Automatic Emergency Braking'
  | 'Blind Spot Intervention (BSI)'
  | 'Lane Centering Assistance'
  | (string & Record<string, never>)
