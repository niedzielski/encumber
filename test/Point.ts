import Point from '../src/Point'

describe('Point', () => {
  describe('x()', () => {
    test('zero', () => {
      const subject: Point = new Point(0, 0)
      expect(subject.x()).toBe(0)
    })

    test('nonzero', () => {
      const subject: Point = new Point(1, 0)
      expect(subject.x()).toBe(1)
    })
  })

  describe('y()', () => {
    test('zero', () => {
      const subject: Point = new Point(0, 0)
      expect(subject.y()).toBe(0)
    })

    test('nonzero', () => {
      const subject: Point = new Point(0, 1)
      expect(subject.y()).toBe(1)
    })
  })

  describe('equal()', () => {
    test('self', () => {
      const subject: Point = new Point(0, 0)
      expect(subject.equal(subject)).toBe(true)
    })

    test('other', () => {
      const subject: Point = new Point(1, 1)
      const rhs: Point = new Point(1, 1)
      expect(subject.equal(rhs)).toBe(true)
    })

    test('x differs', () => {
      const subject: Point = new Point(0, 1)
      const rhs: Point = new Point(1, 1)
      expect(subject.equal(rhs)).toBe(false)
    })

    test('y differs', () => {
      const subject: Point = new Point(1, 0)
      const rhs: Point = new Point(1, 1)
      expect(subject.equal(rhs)).toBe(false)
    })

    test('undefined', () => {
      const subject: Point = new Point(0, 0)
      expect(subject.equal()).toBe(false)
    })
  })

  describe('toString()', () => {
    test('zero', () => {
      const subject: Point = new Point(0, 0)
      expect(subject.toString()).toBe('(0 0)')
    })

    test('nonzero', () => {
      const subject: Point = new Point(1, 1)
      expect(subject.toString()).toBe('(1 1)')
    })
  })
})