// eslint-disable-line max-lines

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  describe('equal()', () => {
    test('self', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.equal(rectangle)).toBeTruthy()
    })

    test('null', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(!rectangle.equal(undefined)).toBeTruthy()
    })

    test('unequal', () => {
      const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      const rhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(!lhs.equal(rhs)).toBeTruthy()
    })

    test('equal', () => {
      const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rhs: Rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      expect(lhs.equal(rhs)).toBeTruthy()
    })
  })

  describe('point0()', () => {
    test('zero', () => {
      const point0: Point = new Point(0, 0)
      const rectangle: Rectangle = new Rectangle(point0, new Point(0, 0))
      expect(rectangle.point0().equal(point0)).toBeTruthy()
    })

    test('nonzero', () => {
      const point0: Point = new Point(1, 1)
      const rectangle: Rectangle = new Rectangle(point0, new Point(0, 0))
      expect(rectangle.point0().equal(point0)).toBeTruthy()
    })
  })

  describe('point1()', () => {
    test('zero', () => {
      const point1: Point = new Point(0, 0)
      const rectangle: Rectangle = new Rectangle(new Point(0, 0), point1)
      expect(rectangle.point1().equal(point1)).toBeTruthy()
    })

    test('nonzero', () => {
      const point1: Point = new Point(1, 1)
      const rectangle: Rectangle = new Rectangle(new Point(0, 0), point1)
      expect(rectangle.point1().equal(point1)).toBeTruthy()
    })
  })

  describe('topLeft()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.topLeft().equal(new Point(0, 0))).toBeTruthy()
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.topLeft().equal(new Point(0, 1))).toBeTruthy()
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.topLeft().equal(new Point(0, 1))).toBeTruthy()
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.topLeft().equal(new Point(-1, 0))).toBeTruthy()
    })
  })

  describe('bottomLeft()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.bottomLeft().equal(new Point(0, 0))).toBeTruthy()
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.bottomLeft().equal(new Point(0, 0))).toBeTruthy()
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.bottomLeft().equal(new Point(0, 0))).toBeTruthy()
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.bottomLeft().equal(new Point(-1, -1))).toBeTruthy()
    })
  })

  describe('bottomRight()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.bottomRight().equal(new Point(0, 0))).toBeTruthy()
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.bottomRight().equal(new Point(1, 0))).toBeTruthy()
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.bottomRight().equal(new Point(1, 0))).toBeTruthy()
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.bottomRight().equal(new Point(0, -1))).toBeTruthy()
    })
  })

  describe('topRight()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.topRight().equal(new Point(0, 0))).toBeTruthy()
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.topRight().equal(new Point(1, 1))).toBeTruthy()
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.topRight().equal(new Point(1, 1))).toBeTruthy()
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      expect(rectangle.topRight().equal(new Point(0, 0))).toBeTruthy()
    })
  })

  describe('points()', () => {
    test('empty', () => {
      const point = new Point(0, 0)
      const rectangle: Rectangle = new Rectangle(point, point)
      expect(rectangle.points()).toEqual([point, point, point, point])
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      const expected = [new Point(0, 1), new Point(0, 0), new Point(1, 0),
        new Point(1, 1)]
      expect(rectangle.points()).toEqual(expected)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const expected = [new Point(0, 1), new Point(0, 0), new Point(1, 0),
        new Point(1, 1)]
      expect(rectangle.points()).toEqual(expected)
    })

    test('negative', () => {
      const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
        new Point(0, 0))
      const expected = [new Point(-1, 0), new Point(-1, -1), new Point(0, -1),
        new Point(0, 0)]
      expect(rectangle.points()).toEqual(expected)
    })
  })

  describe('width()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.width()).toBe(0)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.width()).toBe(1)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.width()).toBe(1)
    })
  })

  describe('length()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.length()).toBe(0)
    })

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.length()).toBe(1)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.length()).toBe(1)
    })
  })

  describe('diagonal()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.diagonal()).toBe(0)
    })

    test('lhs > rhs', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle: Rectangle = new Rectangle(new Point(3, 4),
        new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.diagonal()).toBe(5)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 4)) // eslint-disable-line no-magic-numbers
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

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      expect(rectangle.perimeter()).toBe(4)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
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

    test('lhs > rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(1, 1),
        new Point(0, 0))
      expect(rectangle.area()).toBe(1)
    })

    test('lhs < rhs', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.area()).toBe(1)
    })
  })

  describe('empty()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.empty()).toBeTruthy()
    })

    test('nonempty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
       new Point(1, 1))
      expect(!rectangle.empty()).toBeTruthy()
    })
  })

  describe('square()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.square()).toBeTruthy()
    })

    test('square', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.square()).toBeTruthy()
    })

    test('rectangle', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 2))
      expect(!rectangle.square()).toBeTruthy()
    })
  })

  describe('containsPoint()', () => {
    test('disjoint', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(!rectangle.containsPoint(new Point(2, 2))).toBeTruthy()
    })

    test('borders', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.containsPoint(new Point(1, 1))).toBeTruthy()
    })

    test('contains', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(2, 2))
      expect(rectangle.containsPoint(new Point(1, 1))).toBeTruthy()
    })
  })

  describe('containsRectangle()', () => {
    test('disjoint', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
        new Point(2, 2))
      expect(!rectangle0.containsRectangle(rectangle1)).toBeTruthy()
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(1, 1))
      expect(rectangle0.containsRectangle(rectangle1)).toBeTruthy()
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 3)) // eslint-disable-line no-magic-numbers
      expect(!rectangle0.containsRectangle(rectangle1)).toBeTruthy()
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.containsRectangle(rectangle)).toBeTruthy()
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.containsRectangle(rectangle1)).toBeTruthy()
      })
    })
  })

  describe('intersection()', () => {
    test('disjoint', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
        new Point(2, 2))
      expect(rectangle0.intersection(rectangle1).empty()).toBeTruthy()
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      expect(rectangle0.intersection(rectangle1).empty()).toBeTruthy()
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(2, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 0),
        new Point(2, 2))
      const intersection: Rectangle = rectangle0.intersection(rectangle1)
      const expected = new Rectangle(new Point(1, 0), new Point(2, 1))
      expect(intersection.equal(expected)).toBeTruthy()
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const intersection: Rectangle = rectangle.intersection(rectangle)
        expect(intersection.equal(rectangle)).toBeTruthy()
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        const intersection: Rectangle = rectangle0.intersection(rectangle1)
        expect(intersection.equal(rectangle1)).toBeTruthy()
      })
    })
  })

  describe('intersects()', () => {
    test('disjoint', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
        new Point(2, 2))
      expect(!rectangle0.intersects(rectangle1)).toBeTruthy()
    })

    test('borders', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      expect(rectangle0.intersects(rectangle1)).toBeTruthy()
    })

    test('intersects', () => {
      const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 3)) // eslint-disable-line no-magic-numbers
      expect(rectangle0.intersects(rectangle1)).toBeTruthy()
    })

    describe('contains', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.intersects(rectangle)).toBeTruthy()
      })

      test('other', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(3, 3)) // eslint-disable-line no-magic-numbers
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersects(rectangle1)).toBeTruthy()
      })
    })
  })
})