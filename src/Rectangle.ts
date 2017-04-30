import Point from './Point'

export default class Rectangle {
  private readonly _point0: Point
  private readonly _point1: Point

  /** @arg {!Point} point0 The first of two corner Points describing the
                           Rectangle.
      @arg {!Point} point1 The second of two corner Points describing the
                           Rectangle. */
  constructor(point0: Point, point1: Point) {
    this._point0 = point0
    this._point1 = point1
  }

  /** @arg {?Rectangle} rectangle
      @return {!boolean} true if both Rectangles can be described by the same
                         corner Points, false otherwise. */
  equal(rectangle?: Rectangle): boolean {
    return !!rectangle
      && this.minimum().equal(rectangle.minimum())
      && this.maximum().equal(rectangle.maximum())
  }

  toString(): string {
    const point0: string = `${this.point0().x()} ${this.point0().y()}`
    const point1: string = `${this.point1().x()} ${this.point1().y()}`
    return `|${point0} ${point1}|`
  }

  /** @return {!Point} The first of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point0(): Point { return this._point0 }

  /** @return {!Point} The second of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point1(): Point { return this._point1 }

  /** @return {!Point} The Point describing the corner with the minimum x and
                       y-coordinate. */
  minimum(): Point { return Rectangle._minimum(this.point0(), this.point1()) }

  /** @return {!Point} The Point describing the corner with the maximum x and
                       y-coordinate. */
  maximum(): Point { return Rectangle._maximum(this.point0(), this.point1()) }

  // todo: center

  /** @return {!number} The number of units between the minimum and maximum
                        x-coordinates of the Rectangle. */
  width(): number { return Math.abs(this.point0().x() - this.point1().x()) }

  /** @return {!number} The number of units between the minimum and maximum
                        y-coordinates of the Rectangle. */
  height(): number { return Math.abs(this.point0().y() - this.point1().y()) }

  /** @return {!number} The magnitude between opposite points of the
                        Rectangle. */
  diagonal(): number {
    return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2))
  }

  /** @return {!number} The sum of all sides of the Rectangle. */
  perimeter(): number { return 2 * (this.width() + this.height()) }

  /** @return {!number} The number of square units spanned by the Rectangle. */
  area(): number { return this.width() * this.height() }

  /** @return {!boolean} true if this Rectangle spans no area, false if the area
                         is nonzero. */
  empty(): boolean { return !this.area() }

  /** @return {!boolean} true if the Rectangle is square, false if oblong. */
  square(): boolean { return this.width() === this.height() }

  /** @arg {!Point} point
      @return {!boolean} true if point is inclusively bound by this Rectangle,
                         false if point is exclusively unenclosed. The
                         consequence of inclusiveness is that Rectangles contain
                         themselves and Rectangles sharing a boundary are
                         considered intersecting and may also be considered
                         disjoint by the client. */
  containsPoint(point: Point): boolean {
    return point.x() >= this.minimum().x() && point.x() <= this.maximum().x()
      && point.y() >= this.minimum().y() && point.y() <= this.maximum().y()
  }

  /** Noncommutative.
      @arg {!Rectangle} rectangle
      @return {!boolean} true if rectangle is inclusively within this Rectangle,
                         false if rectangle is partially or completely
                         external. */
  containsRectangle(rectangle: Rectangle): boolean {
    return this.containsPoint(rectangle.point0())
      && this.containsPoint(rectangle.point1())
  }

  // todo: union

  /** @arg {!Rectangle} rectangle
      @return {!Rectangle} The overlap of this Rectangle and rectangle, possibly
                           empty. */
  intersection(rectangle: Rectangle): Rectangle {
    const minimum: Point = Rectangle._minimum(this.maximum(),
      Rectangle._maximum(this.minimum(), rectangle.minimum()))
    const maximum: Point = Rectangle._maximum(this.minimum(),
      Rectangle._minimum(this.maximum(), rectangle.maximum()))

    return new Rectangle(minimum, maximum)
  }

  /** @arg {!Rectangle} rectangle
      @return {!boolean} true if an inclusive overlap exists, false if
                         Rectangles are disjoint. */
  intersects(rectangle: Rectangle): boolean {
    const intersection: Rectangle = this.intersection(rectangle)
    const point: Point = intersection.point0()
    return !!intersection.area()
      || this.containsPoint(point) && rectangle.containsPoint(point)
  }

  /** @arg {!Rectangle} rectangle The Rectangle to remove.
      @return {!Rectangle[]} The relative complement of rectangle in this
                             Rectangle as represented by a four member, possibly
                             overlapping or empty, union of Rectangles. The
                             result inclusively contains the maximally sized
                             disjoint Rectangles possible. */
  complement(rectangle: Rectangle): Rectangle[] {
    const intersection: Rectangle = this.intersection(rectangle)

    const top: Rectangle = new Rectangle(
      new Point(this.minimum().x(), intersection.maximum().y()), this.maximum()
    )

    const left: Rectangle = new Rectangle(this.minimum(),
      new Point(intersection.minimum().x(), this.maximum().y()))

    const bottom: Rectangle = new Rectangle(this.minimum(),
      new Point(this.maximum().x(), intersection.minimum().y()))

    const right: Rectangle = new Rectangle(
      new Point(intersection.maximum().x(), this.minimum().y()), this.maximum()
    )

    return [top, left, bottom, right]
  }

  // todo: translate
  // todo: scale

  /** @arg {!Point} point0
      @arg {!Point} point1
      @return {!Point} The Point describing the corner with the minimum x and
                       y-coordinate. */
  private static _minimum(point0: Point, point1: Point): Point {
    return new Point(Math.min(point0.x(), point1.x()),
      Math.min(point0.y(), point1.y()))
  }

  /** @arg {!Point} point0
      @arg {!Point} point1
      @return {!Point} The Point describing the corner with the maximum x and
                       y-coordinate. */
  private static _maximum(point0: Point, point1: Point): Point {
    return new Point(Math.max(point0.x(), point1.x()),
      Math.max(point0.y(), point1.y()))
  }
}