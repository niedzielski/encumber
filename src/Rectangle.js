import Point from './Point'

/** Immutable. */
export default class Rectangle {
  /**
   * @param {!Point} point0 The first of two corner Points describing the
   *                        Rectangle.
   * @param {!Point} point1 The second of two corner Points describing the
   *                        Rectangle.
   */
  constructor(point0, point1) {
    this._point0 = point0
    this._point1 = point1
  }

  /**
   * @param {?Rectangle} rectangle
   * @return {!boolean} true if both Rectangles can be described by the same
   *                    corner Points, false otherwise.
   */
  equal(rectangle) {
    return rectangle
      && this.topLeft().equal(rectangle.topLeft())
      && this.bottomRight().equal(rectangle.bottomRight())
  }

  /** @return {!Point} The first of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point0() { return this._point0 }

  /** @return {!Point} The second of two corner Points describing the
                       Rectangle as supplied to the constructor. */
  point1() { return this._point1 }

  /** @return {!Point} The Point describing the upper left corner of the
                       Rectangle. i.e., the corner with the minimum x-coordinate
                       and maximum y-coordinate. */
  topLeft() {
    return Rectangle._topLeft(this.point0(), this.point1())
  }

  /** @return {!Point} The Point describing the lower left corner of the
                       Rectangle. i.e., the corner with the minimum x-coordinate
                       and minimum y-coordinate. */
  bottomLeft() {
    return new Point(Math.min(this.point0().x(), this.point1().x()),
      Math.min(this.point0().y(), this.point1().y()))
  }

  /** @return {!Point} The Point describing the lower right corner of the
                       Rectangle. i.e., the corner with the maximum x-coordinate
                       and minimum y-coordinate. */
  bottomRight() {
    return Rectangle._bottomRight(this.point0(), this.point1())
  }

  /** @return {!Point} The Point describing the upper right corner of the
                       Rectangle. i.e., the corner with the maximum x-coordinate
                       and maximum y-coordinate. */
  topRight() {
    return new Point(Math.max(this.point0().x(), this.point1().x()),
      Math.max(this.point0().y(), this.point1().y()))
  }

  /** @return {!Array.<Point>} The four Points describing the Rectangle in
                               counter-clockwise order from the top left. */
  points() {
    return [this.topLeft(), this.bottomLeft(), this.bottomRight(),
      this.topRight()]
  }

  // todo: center

  /** @return {!number} The number of units between the minimum and maximum
                        x-coordinates of the Rectangle. */
  width() { return Math.abs(this.point0().x() - this.point1().x()) }

  /** @return {!number} The number of units between the minimum and maximum
                        y-coordinates of the Rectangle. */
  length() { return Math.abs(this.point0().y() - this.point1().y()) }

  /** @return {!number} The number of square units spanned by the Rectangle. */
  area() { return this.width() * this.length() }

  /** @return {!boolean} true if the Rectangle spans no area, false if the area
                         is nonzero. */
  empty() { return this.area() === 0 }

  /** @return {!boolean} false if the Rectangle is oblong, true if square. */
  square() { return this.width() === this.length() }

  /** @return {!number} The magnitude between opposite points of the
                        Rectangle. */
  diagonal() {
    return Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.length(), 2))
  }

  /** @return {!number} The sum of all sides of the Rectangle. */
  perimeter() { return 2 * (this.width() + this.length()) }

  /**
   * @param {!Point} point
   * @return {!boolean} true if the Point is inclusively bounded by the
   *                    Rectangle, false if the Point is exclusively
   *                    external.
   */
  containsPoint(point) {
    // eslint-disable-next-line max-len
    return point.x() >= this.topLeft().x() && point.x() <= this.bottomRight().x()
      && point.y() <= this.topLeft().y() && point.y() >= this.bottomRight().y()
  }

  /**
   * @param {!Rectangle} rectangle
   * @return {!boolean} true if rectangle is fully inclusively bounded by this
   *                    Rectangle, false if partially or completely
   *                    disjoint.
   */
  containsRectangle(rectangle) {
    return this.containsPoint(rectangle.point0())
      && this.containsPoint(rectangle.point1())
  }

  // todo: union

  /**
   * @param {!Rectangle} rectangle
   * @return {!Rectangle} The union of overlap between rectangle and this
   *                      Rectangle.
   */
  intersection(rectangle) {
    const topLeft = Rectangle._bottomRight(this.topLeft(), rectangle.topLeft())
    const bottomRight = Rectangle._topLeft(this.bottomRight(),
      rectangle.bottomRight())
    return this.containsPoint(topLeft) && this.containsPoint(bottomRight)
      ? new Rectangle(topLeft, bottomRight)
      : new Rectangle(topLeft, topLeft)
  }

  /**
   * @param {!Rectangle} rectangle
   * @return {!boolean} true if an inclusive union of overlap exists, false if
   *                    Rectangles are exclusive.
   */
  intersects(rectangle) {
    const intersection = this.intersection(rectangle)
    return !intersection.empty() || this.containsPoint(intersection.point0())
  }

  // todo: translate
  // todo: scale

  /**
   * @param {!Point} point0
   * @param {!Point} point1
   * @return {!Point} The Point with a minimum x-coordinate and maximum
   *                  y-coordinate of the Rectangle.
   */
  static _topLeft(point0, point1) {
    return new Point(Math.min(point0.x(), point1.x()),
      Math.max(point0.y(), point1.y()))
  }

  /**
   * @param {!Point} point0
   * @param {!Point} point1
   *  @return {!Point} The Point with a maximum x-coordinate and minimum
   *                   y-coordinate of the Rectangle.
   */
  static _bottomRight(point0, point1) {
    return new Point(Math.max(point0.x(), point1.x()),
      Math.min(point0.y(), point1.y()))
  }
}