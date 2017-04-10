/** Immutable. */
export default class Point {
  /** @arg {!number} x
      @arg {!number} y */
  constructor(x, y) {
    this._x = x
    this._y = y
  }

  /** @arg {?Point} rhs
      @return {!boolean} */
  equal(rhs) {
    return rhs && this.x() === rhs.x() && this.y() === rhs.y()
  }

  /** @return {!number} */
  x() { return this._x }

  /** @return {!number} */
  y() { return this._y }
}