import Point from './Point' // eslint-disable-line no-unused-vars
import Rectangle from './Rectangle'

/** A sequence of Rectangles. */
export default class RectangleArray extends Array<Rectangle> {
  constructor(...entries: Rectangle[]) {
    super(...entries)

    // Set the prototype explicitly.
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Reflect.setPrototypeOf(this, RectangleArray.prototype)
  }

  /** @arg {!Rectangle} rectangle
      @return {!boolean} true if rectangle is an entry, false if absent. */
  has(rectangle: Rectangle): boolean {
    return this.indexOf(rectangle) > -1
  }

  /** @arg {!Point} point
      @return {!RectangleArray} Entries intersecting point. */
  at(point: Point): RectangleArray {
    return new RectangleArray(...this.filter((entry: Rectangle): boolean =>
      entry.containsPoint(point)))
  }

  /** @arg {!Rectangle} rectangle
      @return {!RectangleArray} Entries contained by rectangle. */
  within(rectangle: Rectangle): RectangleArray {
    return new RectangleArray(...this.filter((entry: Rectangle): boolean =>
      rectangle.containsRectangle(entry)))
  }

  /** @arg {!Rectangle} rectangle
      @return {!RectangleArray} Entries intersecting rectangle. */
  intersecting(rectangle: Rectangle): RectangleArray {
    return new RectangleArray(...this.filter((entry: Rectangle): boolean =>
      entry.intersects(rectangle)))
  }

  /** @arg {!Rectangle} rectangle
      @return {!RectangleArray} The relative complement of rectangle in all
                                entries as represented by a union of nonempty,
                                maximally sized, possibly overlapping
                                Rectangles. */
  complement(rectangle: Rectangle): RectangleArray {
    return new RectangleArray(...Rectangle.filterNonemptySuperset(
      this.reduce((array: Rectangle[], entry: Rectangle): Rectangle[] =>
        array.concat(entry.complement(rectangle)), [])
    ))
  }

  difference(array: RectangleArray): RectangleArray {
    // eslint-disable-next-line no-shadow
    const reduce = (array: RectangleArray, entry: Rectangle): RectangleArray =>
      array.remove(entry)
    return array.reduce(reduce, this)
  }

  remove(rectangle: Rectangle): RectangleArray {
    const result: RectangleArray = new RectangleArray(...this)
    const index: number = result.indexOf(rectangle)
    if (index > -1) result.splice(index, 1)
    return result
  }

  indexOf(rectangle: Rectangle): number {
    return this.findIndex((entry: Rectangle) => entry.equal(rectangle))
  }

  // todo: consider order here. The client should decide whether order is
  //       important in how they construct Rectangles and RectangleArrays. This
  //       isn't a concern here.
  /** @arg {?RectangleArray} array
      @return {!boolean} true if both arrays have identical unordered sequences,
                         false if entry memberships differ. */
  equal(array?: RectangleArray): boolean {
    return !!array
      && this.length === array.length && !this.difference(array).length
  }

  toString() {
    const reduce = (string: string, entry: Rectangle): string =>
        `${string}${string ? ' ' : ''}${entry}`
    return `[${this.reduce(reduce, '')}]`
  }
}