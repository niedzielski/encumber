export default class Point {
  private readonly _x: number
  private readonly _y: number

  constructor(x: number, y: number) {
    this._x = x
    this._y = y
  }

  equal(point?: Point): boolean {
    return !!point && this.x() === point.x() && this.y() === point.y()
  }

  toString(): string { return `(${this.x()} ${this.y()})` }

  x(): number { return this._x }

  y(): number { return this._y }
}