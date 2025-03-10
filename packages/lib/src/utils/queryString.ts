/**
 * @module utils/queryString
 * @category Utility Functions
 */

import { NHTSA_RESPONSE_FORMAT } from '@/constants'
import { validateArgument } from '@/utils'

/** Valid URI component types */
export type QueryStringTypes = string | number | boolean | undefined

/** Object to build the query string with */
export type QueryStringParams = Record<string, QueryStringTypes>

/** Object returned by encodeQueryStringParams() */
export type QueryStringParamsEncoded<T> = { [key in keyof T]: string }

/**
 * Utility function to perform URI component encoding on all values in an object, for use in URL
 * query strings.
 *
 * This function is used internally by other package functions. As a consumer of this package, you
 * should not need to use this function directly in most cases.
 *
 * - Returns an object of valid URI encoded parameters with same keys as the original object.
 * - Will silently filter out parameters with values that are not type `string`, `number`,
 *   `boolean`, or `undefined`.
 * - It filters invalid key/values so that encodeURIComponent() does not throw an error.
 *
 * @param  params - An object of search parameters to be encoded. Any keys with values not a string,
 * number, or boolean are filtered out of the final object.
 * @returns - A new object of same keys as the original object with values converted to URI
 * component strings.
 */
export const encodeQueryStringParams = <T extends QueryStringParams>(
  params: T
): QueryStringParamsEncoded<T> => {
  /* Validate user provided params is an object */
  validateArgument({
    name: 'params',
    value: params,
    required: true,
    types: ['object'],
  })

  const _params = Object.entries(params)
    .filter(([key, value]) =>
      validateArgument({
        name: key,
        types: ['string', 'number', 'boolean'],
        value,
        errorMode: 'boolean',
      })
    )
    .reduce((acc, [key, value]) => {
      /* can expect only strings, numbers, booleans, and undefined after filtering */
      if (value !== undefined) acc[key as keyof T] = encodeURIComponent(value)
      return acc
    }, {} as QueryStringParamsEncoded<T>)

  return _params
}

/**
 * Utility function to generate a query string conforming to URI component standards. Takes an an
 * optional object of search parameters and returns an encoded query string.
 *
 * This function is used internally by other package functions. As a consumer of this package, you
 * should not need to use this function directly in most cases.
 *
 * Default query string: `"?format=json"`
 *
 * This function will always override `params.format` with `{ format: 'json' }`. This is hardcoded
 * into the package and cannot be overridden, this package provides no support for CSV or XML
 * formats at this time. This means the default query string will be `"?format=json"` even if no
 * `params` are provided by user.
 *
 * - Ignores parameters that are not strings, numbers, booleans, or undefined and also ignores empty
 *   string values by default.
 * - If you don't provide anyyhing other than an object as the first argument, an error will be
 *   thrown. Providing an empty object will not throw an error.
 * - If the second argument, `allowEmptyParams`, is set to `true`, the function will include keys
 *   with empty string values in the final query string, e.g. 'emptyKey='.
 *
 * @param params - An object of search parameters to be converted to a query
 * string.
 * @param [allowEmptyParams=false] - Set to `true` to include keys with empty string
 * values, e.g. 'emptyKey='.
 * @returns - A query string of search parameters for use in a final fetch URL.
 */
export const createQueryString = <T extends QueryStringParams>(
  params = {} as T,
  allowEmptyParams = false
): string => {
  /* Validate user provided params is an object */
  validateArgument({
    name: 'params',
    value: params,
    types: ['object'],
  })

  /* Merge with valid user params but override with static params */
  const _params = encodeQueryStringParams({
    ...params,
    format: NHTSA_RESPONSE_FORMAT,
  })

  /* Create query string from params, default: ?format=json */
  return (
    '?' +
    Object.entries(_params)
      .map(([key, value], index, array) => {
        return value.length || (allowEmptyParams && value === '')
          ? `${key}=${value}${index < array.length - 1 ? '&' : ''}`
          : ''
      })
      .join('')
  )
}
