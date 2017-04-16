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

  /** @return {!Point} The first of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point0(): Point { return this._point0 }

  /** @return {!Point} The second of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point1(): Point { return this._point1 }

  /** @return {!Point} The Point describing the corner with the minimum x and
                       y-coordinate. */
  minimum(): Point {
    return Rectangle.minimum(this.point0(), this.point1())
  }

  /** @return {!Point} The Point describing the corner with the maximum x and
                       y-coordinate. */
  maximum(): Point {
    return Rectangle.maximum(this.point0(), this.point1())
  }

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

  /** @return {!boolean} true if the Rectangle is square, false if oblong. */
  square(): boolean { return this.width() === this.height() }

  /** @arg {!Point} point
      @return {!boolean} true if the Point is inclusively bound by the
                         Rectangle, false if the Point is exclusively
                         external. */
  enclosesPoint(point: Point): boolean {
    return point.x() >= this.minimum().x() && point.x() <= this.maximum().x()
      && point.y() >= this.minimum().y() && point.y() <= this.maximum().y()
  }

  /** Noncommutative.
      @arg {!Rectangle} rectangle
      @return {!boolean} true if rectangle is fully inclusively bounded by this
                         Rectangle, false if partially or completely
                         disjoint. */
  enclosesRectangle(rectangle: Rectangle): boolean {
    return this.enclosesPoint(rectangle.point0())
      && this.enclosesPoint(rectangle.point1())
  }

  // todo: union

  /** @arg {!Rectangle} rectangle
      @return {!Rectangle} The intersection of this Rectangle and rectangle. */
  overlap(rectangle: Rectangle): Rectangle {
    const minimum = Rectangle.maximum(this.minimum(), rectangle.minimum())
    const maximum = Rectangle.minimum(this.maximum(), rectangle.maximum())

    return this.enclosesPoint(minimum) && this.enclosesPoint(maximum)
      ? new Rectangle(minimum, maximum)
      : new Rectangle(minimum, minimum)
  }

  /** @arg {!Rectangle} rectangle
      @return {!boolean} true if an inclusive intersection exists, false if
                         Rectangles are exclusive. */
  overlaps(rectangle: Rectangle): boolean {
    const overlap: Rectangle = this.overlap(rectangle)
    const point: Point = overlap.point0()
    return !!overlap.area()
      || this.enclosesPoint(point) && rectangle.enclosesPoint(point)
  }

  // todo: translate
  // todo: scale

  /** @arg {!Point} point0
      @arg {!Point} point1
      @return {!Point} The Point describing the corner with the minimum x and
                       y-coordinate. */
  private static minimum(point0: Point, point1: Point): Point {
    return new Point(Math.min(point0.x(), point1.x()),
      Math.min(point0.y(), point1.y()))
  }

  /** @arg {!Point} point0
      @arg {!Point} point1
      @return {!Point} The Point describing the corner with the maximum x and
                       y-coordinate. */
  private static maximum(point0: Point, point1: Point): Point {
    return new Point(Math.max(point0.x(), point1.x()),
      Math.max(point0.y(), point1.y()))
  }
}