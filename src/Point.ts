/** Immutable. */
export default class Point {
  private readonly _x: number
  private readonly _y: number

  /**
   * @param {!number} x
   * @param {!number} y
   */
  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  /**
   * @param {?Point} rhs
   * @return {!boolean}
   */
  equal(rhs?: Point): boolean {
    return !!rhs && this.x() === rhs.x() && this.y() === rhs.y()
  }

  /** @return {!number} */
  x(): number { return this._x }

  /** @return {!number} */
  y(): number { return this._y }
}