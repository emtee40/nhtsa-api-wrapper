/* Parent Class */
import { Fetch } from '../Fetch';
/* Utiltiy Functions */
import { getTypeof } from '../../utils';

/**
 * @category Actions
 * @class DecodeVinValuesExtended
 * @extends {module:api/Fetch.Fetch}
 */
export class DecodeVinValuesExtended extends Fetch {
  /**
   * This is exactly like the DecodeVinValues (flat format) method but provides additional information
   * on variables related to other NHTSA programs like NCSA etc.
   * - This will decode the VIN and the decoded output will be made available in a flat file format.
   * - Providing `params.modelYear` allows for the decoding to specifically be done in the current,
   *   or older (pre-1980), model year ranges.
   *   - It is recommended to always provide `params.modelYear` if the model year is known at the time of decoding.
   * - This Action also supports partial VIN decoding (VINs that are less than 17 characters).
   *   - In this case, the VIN will be decoded partially with the available characters.
   *   - In case of partial VINs, a "*" could be used to indicate the unavailable characters.
   *
   * @async
   * @memberof DecodeVinValuesExtended
   *
   * @param {string} vin Vehicle Identification Number (full or partial)
   * @param {object} params={} Query Search Parameters to append to the URL
   * @param {string|number} [params.modelYear] - Optional Model Year search parameter
   *
   * @returns {(Promise<module:api.ApiResponse | Error>)}
   */
  async DecodeVinValuesExtended(
    vin: string,
    params: {
      modelYear?: string | number;
    } = {}
  ): Promise<import('../types').ApiResponse | Error> {
    const action = 'DecodeVinValuesExtended';

    /* Runtime typechecking */
    if (getTypeof(vin) !== 'string') {
      return Promise.reject(
        new Error(
          `${action}, vin argument is required and must be a string, got: ${vin}`
        )
      );
    }

    /* Build the query string to be appended to the URL*/
    const queryString = await this.buildQueryString(params).catch(err =>
      Promise.reject(
        new Error(`${action}, Error building query string: ${err}`)
      )
    );

    /* Build the final request URL*/
    const url = `${this.baseUrl}/${action}/${vin}${queryString}`;

    /* Return the result */
    return await this.get(url)
      .then(response => response)
      .catch(err =>
        Promise.reject(new Error(`${action}, Fetch.get() error: ${err}`))
      );
  }
}
