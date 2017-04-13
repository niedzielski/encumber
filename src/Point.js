import ArgumentUtility from './ArgumentUtility'

/** Immutable. */
export default class Point {
  /**
   * @param {!number} x
   * @param {!number} y
   */
  constructor(x, y) {
    ArgumentUtility.assertNonnull(x, y)
    this._x = x
    this._y = y
  }

  /**
   * @param {?Point} rhs
   * @return {!boolean}
   */
  equal(rhs) {
    return rhs && this.x() === rhs.x() && this.y() === rhs.y()
  }

  /** @return {!number} */
  x() { return this._x }

  /** @return {!number} */
  y() { return this._y }
}