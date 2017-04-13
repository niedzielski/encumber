/**
 * @param {!Array.<Object>} args
 * @return {void}
*/
const assertNonnull = (...args) => {
  args.forEach(arg => {
    if (arg === null || arg === undefined) { // eslint-disable-line no-undefined
      throw new TypeError(`Argument was ${arg}; expected nonnull defined.`)
    }
  })
}

/**
 * @param {!Array.<Object>} args
 * @return {void}
*/
const assertTruthy = (...args) => {
  args.forEach(arg => {
    if (!arg) {
      throw new TypeError(`Argument was ${arg}; expected truthy.`)
    }
  })
}

export default {
  assertNonnull,
  assertTruthy
}