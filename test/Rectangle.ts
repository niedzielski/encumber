// eslint-disable-line max-lines

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  describe('equal()', () => {
    test('self', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.equal(rectangle)).toBe(true)
    })

    test('null', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.equal()).toBe(false)
    })

    test('unequal', () => {
      const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      const rhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(lhs.equal(rhs)).toBe(false)
    })

    test('equal', () => {
      const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rhs: Rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      expect(lhs.equal(rhs)).toBe(true)
    })
  })

  describe('point0()', () => {
    test('zero', () => {
      const point0: Point = new Point(0, 0)
      const rectangle: Rectangle = new Rectangle(point0, new Point(0, 0))
      expect(rectangle.point0().equal(point0)).toBe(true)
    })

    test('nonzero', () => {
      const point0: Point = new Point(1, 1)
      const rectangle: Rectangle = new Rectangle(point0, new Point(0, 0))
      expect(rectangle.point0().equal(point0)).toBe(true)
    })
  })

  describe('point1()', () => {
    test('zero', () => {
      const point1: Point = new Point(0, 0)
      const rectangle: Rectangle = new Rectangle(new Point(0, 0), point1)
      expect(rectangle.point1().equal(point1)).toBe(true)
    })

    test('nonzero', () => {
      const point1: Point = new Point(1, 1)
      const rectangle: Rectangle = new Rectangle(new Point(0, 0), point1)
      expect(rectangle.point1().equal(point1)).toBe(true)
    })
  })

  describe('minimum()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.minimum().equal(new Point(0, 0))).toBe(true)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.minimum().equal(new Point(0, 0))).toBe(true)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.minimum().equal(new Point(0, 0))).toBe(true)
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.minimum().equal(new Point(-1, -1))).toBe(true)
    })

    test('x !== y', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle: Rectangle = new Rectangle(new Point(2, 3),
        new Point(1, 4)) // eslint-disable-line no-magic-numbers
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.minimum().equal(new Point(1, 3))).toBe(true)
    })
  })

  describe('maximum()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.maximum().equal(new Point(0, 0))).toBe(true)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.maximum().equal(new Point(1, 1))).toBe(true)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.maximum().equal(new Point(1, 1))).toBe(true)
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.maximum().equal(new Point(0, 0))).toBe(true)
    })

    test('x !== y', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle: Rectangle = new Rectangle(new Point(2, 3),
        new Point(1, 4)) // eslint-disable-line no-magic-numbers
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.maximum().equal(new Point(2, 4))).toBe(true)
    })
  })

  describe('width()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.width()).toBe(0)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.width()).toBe(1)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.width()).toBe(1)
    })
  })

  describe('height()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.height()).toBe(0)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.height()).toBe(1)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.height()).toBe(1)
    })
  })

  describe('diagonal()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.diagonal()).toBe(0)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 4)) // eslint-disable-line no-magic-numbers
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.diagonal()).toBe(5)
    })

    test('lhs > rhs', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle: Rectangle = new Rectangle(new Point(3, 4),
        new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.diagonal()).toBe(5)
    })
  })

  describe('perimeter()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.perimeter()).toBe(0)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.perimeter()).toBe(4)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.perimeter()).toBe(4)
    })
  })

  describe('area()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.area()).toBe(0)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.area()).toBe(1)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.area()).toBe(1)
    })
  })

  describe('square()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.square()).toBe(true)
    })

    test('square', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.square()).toBe(true)
    })

    test('rectangle', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 2))
      expect(rectangle.square()).toBe(false)
    })
  })

  describe('enclosesPoint()', () => {
    test('disjoint', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.enclosesPoint(new Point(2, 2))).toBe(false)
    })

    test('borders', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.enclosesPoint(new Point(1, 1))).toBe(true)
    })

    test('contains', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(2, 2))
      expect(rectangle.enclosesPoint(new Point(1, 1))).toBe(true)
    })
  })

  describe('enclosesRectangle()', () => {
    test('disjoint', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
        new Point(2, 2))
      expect(rectangle0.enclosesRectangle(rectangle1)).toBe(false)
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(1, 1))
      expect(rectangle0.enclosesRectangle(rectangle1)).toBe(true)
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 3)) // eslint-disable-line no-magic-numbers
      expect(rectangle0.enclosesRectangle(rectangle1)).toBe(false)
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.enclosesRectangle(rectangle)).toBe(true)
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.enclosesRectangle(rectangle1)).toBe(true)
      })
    })
  })

  describe('overlap()', () => {
    test('disjoint', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
        new Point(2, 2))
      expect(rectangle0.overlap(rectangle1).area()).toBe(0)
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      expect(rectangle0.overlap(rectangle1).area()).toBe(0)
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(2, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 0),
        new Point(2, 2))
      const overlap: Rectangle = rectangle0.overlap(rectangle1)
      const expected = new Rectangle(new Point(1, 0), new Point(2, 1))
      expect(overlap.equal(expected)).toBe(true)
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const overlap: Rectangle = rectangle.overlap(rectangle)
        expect(overlap.equal(rectangle)).toBe(true)
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        const overlap: Rectangle = rectangle0.overlap(rectangle1)
        expect(overlap.equal(rectangle1)).toBe(true)
      })
    })
  })

  describe('overlaps()', () => {
    describe('disjoint', () => {
      test('lhs < rhs', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
          new Point(2, 2))
        expect(rectangle0.overlaps(rectangle1)).toBe(false)
      })

      test('lhs > rhs', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(2, 2),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle0.overlaps(rectangle1)).toBe(false)
      })
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      expect(rectangle0.overlaps(rectangle1)).toBe(true)
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 3)) // eslint-disable-line no-magic-numbers
      expect(rectangle0.overlaps(rectangle1)).toBe(true)
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.overlaps(rectangle)).toBe(true)
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.overlaps(rectangle1)).toBe(true)
      })
    })
  })
})