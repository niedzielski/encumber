import Point from './Point'
import Rectangle from './Rectangle'
import RectangleArray from './RectangleArray'

/** A Rectangle that encloses a RectangleArray. */
export default class Grid extends RectangleArray {
  // todo: consider allowing undefined for unbounded
  private _bounds: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))

  constructor(...entries: Rectangle[]) {
    super(...entries)

    // Set the prototype explicitly.
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Reflect.setPrototypeOf(this, Grid.prototype)
  }

  get bounds(): Rectangle { return this._bounds }

  set bounds(bounds: Rectangle) { this._bounds = bounds }

  /** @arg {!Rectangle} rectangle
      @return {!boolean} true if rectangle is within this Grid and unoccupied,
                         false if not bounded by this Grid or rectangle would
                         overlap an existing entry. */
  vacant(rectangle: Rectangle): boolean {
    return this.bounds.containsRectangle(rectangle)
      && this.vacancies().some((entry: Rectangle) =>
        entry.containsRectangle(rectangle))
  }

  /** @arg {!Rectangle} rectangle
      @return {!RectangleArray} All unoccupied Rectangles within the bounds of
                                this Grid as represented by a union of nonempty,
                                maximally sized, possibly overlapping
                                Rectangles. */
  vacancies(): RectangleArray {
    // RectangleArray.complement() filters out empty entries and in the case
    // where this Rectangle is empty, the expected result is always []. However,
    // in the case where this Rectangle is empty _and_ no entries are present,
    // reduce() would shortcircuit causing the (empty) bounds to be returned
    // unexpectedly. This check prevents that.
    if (this.bounds.area() === 0) return new RectangleArray()

    // eslint-disable-next-line max-len
    return this.reduce((vacancies: RectangleArray, entry: Rectangle): RectangleArray =>
      vacancies.complement(entry), new RectangleArray(this.bounds))
  }

  /** @arg {!Rectangle} rectangle
      @return {!RectangleArray} The largest unoccupied Rectangle. */
  largestVacancy(): Rectangle {
    return Rectangle.sortDescendingArea(this.vacancies())[0]
      || new Rectangle(this.bounds.minimum, this.bounds.minimum)
  }

  /** @arg {?Grid} grid
      @return {!boolean} true if both Grids can be described by the same corner
                         Points and have the same unordered entries, false
                         otherwise. */
  equal(rhs?: Grid): boolean {
    return super.equal(rhs) && this.bounds.equal(rhs!.bounds)
  }

  toString(): string {
    const minimum: string = `${this.bounds.minimum.x} ${this.bounds.minimum.y}`
    const maximum: string = `${this.bounds.maximum.x} ${this.bounds.maximum.y}`
    return `{${minimum} ${maximum} ${super.toString()}}`
  }
}