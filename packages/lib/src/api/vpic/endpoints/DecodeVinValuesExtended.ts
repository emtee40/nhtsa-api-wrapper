/**
 * @module api/vpic/endpoints/DecodeVinValuesExtended
 * @category API - VPIC (VIN Decoding)
 */

import { useNHTSA } from '@/api'
import { catchInvalidArguments, rejectWithError } from '@/utils'
import type { IArgToValidate, NhtsaResponse } from '@/types'

/**
 * ::: tip :bulb: More Information
 * See: [DecodeVinValuesExtended Documentation](/guide/vpic/endpoints/decode-vin-values-extended)
 * :::
 *
 * `DecodeVinValuesExtended` decodes a Vehicle Identification Number (VIN) and returns useful
 * information about the vehicle in in a _flat format_. This means the endpoint will return an
 * array with a single object of results. Each key in the object is the name of a variable.
 *
 * This endpoint is similar to `DecodeVinValues` but returns additional information on variables
 * related to other NHTSA programs like
 * [NCSA](https://www.nhtsa.gov/research-data/national-center-statistics-and-analysis-ncsa), etc.
 *
 * Providing `params.modelYear` allows for the decoding to specifically be done in the current, or
 * older (pre-1980), model year ranges. It is recommended to always provide `params.modelYear` if
 * the model year is known at the time of decoding, but it is not required.
 *
 * This endpoint also supports partial VIN decoding (VINs that are less than 17 characters).
 *   - Ex: "5UXWX7C5*BA"
 *   - In this case, the VIN will be decoded partially with the available characters
 *   - In case of partial VINs, a `*` could be used to indicate the unavailable characters
 *   - The 9th digit is not necessary
 *
 * @param {string} vin - Vehicle Identification Number (full or partial)
 * @param [params] - Object of Query Search names and values to append to the URL as a query string
 * @param {(string|number)} [params.modelYear] - Optional Model Year search parameter
 * @param {boolean} [doFetch=true] - Whether to fetch the data or just return the URL
 * (default: `true`)
 * @returns {(Promise<NhtsaResponse<DecodeVinValuesExtendedResults> | string>)} - Api Response
 * `object` -or- url `string` if `doFetch = false`
 */
function DecodeVinValuesExtended(
  vin: string
): Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>

function DecodeVinValuesExtended(
  vin: string,
  doFetch: true,
  _dummy?: undefined
): Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>

function DecodeVinValuesExtended(
  vin: string,
  doFetch: false,
  _dummy?: undefined
): Promise<string>

function DecodeVinValuesExtended(
  vin: string,
  params: { modelYear?: string | number },
  doFetch: false
): Promise<string>

function DecodeVinValuesExtended(
  vin: string,
  params?: { modelYear?: string | number },
  doFetch?: true
): Promise<NhtsaResponse<DecodeVinValuesExtendedResults>>

/* Implementation */
async function DecodeVinValuesExtended(
  vin: string,
  params?:
    | {
        modelYear?: string | number
      }
    | boolean,
  doFetch = true
): Promise<NhtsaResponse<DecodeVinValuesExtendedResults> | string> {
  const endpointName = 'DecodeVinValuesExtended'

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

export { DecodeVinValuesExtended }

/**
 * Single object found in the `Results` array of `DecodeVinValuesExtended` endpoint response.
 */
export type DecodeVinValuesExtendedResults = {
  ABS: string
  ActiveSafetySysNote: string
  AdaptiveCruiseControl: string
  AdaptiveDrivingBeam: string
  AdaptiveHeadlights: string
  AdditionalErrorText: string
  AirBagLocCurtain: string
  AirBagLocFront: string
  AirBagLocKnee: string
  AirBagLocSeatCushion: string
  AirBagLocSide: string
  AutoReverseSystem: string
  AutomaticPedestrianAlertingSound: string
  AxleConfiguration: string
  Axles: string
  BasePrice: string
  BatteryA: string
  BatteryA_to: string
  BatteryCells: string
  BatteryInfo: string
  BatteryKWh: string
  BatteryKWh_to: string
  BatteryModules: string
  BatteryPacks: string
  BatteryType: string
  BatteryV: string
  BatteryV_to: string
  BedLengthIN: string
  BedType: string
  BlindSpotIntervention: string
  BlindSpotMon: string
  BodyCabType: string
  BodyClass: string
  BrakeSystemDesc: string
  BrakeSystemType: string
  BusFloorConfigType: string
  BusLength: string
  BusType: string
  CAN_AACN: string
  CIB: string
  CashForClunkers: string
  ChargerLevel: string
  ChargerPowerKW: string
  CoolingType: string
  CurbWeightLB: string
  CustomMotorcycleType: string
  DaytimeRunningLight: string
  DestinationMarket: string
  DisplacementCC: string
  DisplacementCI: string
  DisplacementL: string
  Doors: string
  DriveType: string
  DriverAssist: string
  DynamicBrakeSupport: string
  EDR: string
  ESC: string
  EVDriveUnit: string
  ElectrificationLevel: string
  EngineConfiguration: string
  EngineCycles: string
  EngineCylinders: string
  EngineHP: string
  EngineHP_to: string
  EngineKW: string
  EngineManufacturer: string
  EngineModel: string
  EntertainmentSystem: string
  ErrorCode: string
  ErrorText: string
  ForwardCollisionWarning: string
  FuelInjectionType: string
  FuelTypePrimary: string
  FuelTypeSecondary: string
  GCWR: string
  GCWR_to: string
  GVWR: string
  GVWR_to: string
  KeylessIgnition: string
  LaneCenteringAssistance: string
  LaneDepartureWarning: string
  LaneKeepSystem: string
  LowerBeamHeadlampLightSource: string
  Make: string
  MakeID: string
  Manufacturer: string
  ManufacturerId: string
  Model: string
  ModelID: string
  ModelYear: string
  MotorcycleChassisType: string
  MotorcycleSuspensionType: string
  NCSABodyType: string
  NCSAMake: string
  NCSAMapExcApprovedBy: string
  NCSAMapExcApprovedOn: string
  NCSAMappingException: string
  NCSAModel: string
  NCSANote: string
  NonLandUse: string
  Note: string
  OtherBusInfo: string
  OtherEngineInfo: string
  OtherMotorcycleInfo: string
  OtherRestraintSystemInfo: string
  OtherTrailerInfo: string
  ParkAssist: string
  PedestrianAutomaticEmergencyBraking: string
  PlantCity: string
  PlantCompanyName: string
  PlantCountry: string
  PlantState: string
  PossibleValues: string
  Pretensioner: string
  RearAutomaticEmergencyBraking: string
  RearCrossTrafficAlert: string
  RearVisibilitySystem: string
  SAEAutomationLevel: string
  SAEAutomationLevel_to: string
  SeatBeltsAll: string
  SeatRows: string
  Seats: string
  SemiautomaticHeadlampBeamSwitching: string
  Series: string
  Series2: string
  SteeringLocation: string
  SuggestedVIN: string
  TPMS: string
  TopSpeedMPH: string
  TrackWidth: string
  TractionControl: string
  TrailerBodyType: string
  TrailerLength: string
  TrailerType: string
  TransmissionSpeeds: string
  TransmissionStyle: string
  Trim: string
  Trim2: string
  Turbo: string
  VIN: string
  ValveTrainDesign: string
  VehicleDescriptor: string
  VehicleType: string
  WheelBaseLong: string
  WheelBaseShort: string
  WheelBaseType: string
  WheelSizeFront: string
  WheelSizeRear: string
  Wheels: string
  Windows: string
}
