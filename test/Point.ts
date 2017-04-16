import Point from '../src/Point'

describe('Point', () => {
  describe('equal()', () => {
    test('self', () => {
      const point: Point = new Point(0, 0)
      expect(point.equal(point)).toBe(true)
    })

    test('null', () => {
      const point: Point = new Point(0, 0)
      expect(point.equal()).toBe(false)
    })

    test('unequal', () => {
      const lhs: Point = new Point(0, 0)
      const rhs: Point = new Point(1, 1)
      expect(lhs.equal(rhs)).toBe(false)
    })

    test('equal', () => {
      const lhs: Point = new Point(1, 1)
      const rhs: Point = new Point(1, 1)
      expect(lhs.equal(rhs)).toBe(true)
    })
  })

  describe('x()', () => {
    test('zero', () => {
      const point: Point = new Point(0, 0)
      expect(point.x()).toBe(0)
    })

    test('nonzero', () => {
      const point: Point = new Point(1, 0)
      expect(point.x()).toBe(1)
    })
  })

  describe('y()', () => {
    test('zero', () => {
      const point: Point = new Point(0, 0)
      expect(point.y()).toBe(0)
    })

    test('nonzero', () => {
      const point: Point = new Point(0, 1)
      expect(point.y()).toBe(1)
    })
  })
})