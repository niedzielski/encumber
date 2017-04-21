export default class Point {
  private readonly _x: number
  private readonly _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  equal(rhs?: Point): boolean {
    return !!rhs && this.x() === rhs.x() && this.y() === rhs.y()
  }

  x(): number { return this._x }

  y(): number { return this._y }
}