// eslint-disable-line max-lines

import assert from 'assert'

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  describe('equal()', () => {
    it('self', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.equal(rectangle))
    })

    it('null', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(!rectangle.equal(null))
    })

    it('unequal', () => {
      const lhs = new Rectangle(new Point(0, 0), new Point(0, 0))
      const rhs = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(!lhs.equal(rhs))
    })

    it('equal', () => {
      const lhs = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rhs = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.ok(lhs.equal(rhs))
    })
  })

  describe('point0()', () => {
    it('zero', () => {
      const point0 = new Point(0, 0)
      const rectangle = new Rectangle(point0, new Point(0, 0))
      assert.ok(rectangle.point0().equal(point0))
    })

    it('nonzero', () => {
      const point0 = new Point(1, 1)
      const rectangle = new Rectangle(point0, new Point(0, 0))
      assert.ok(rectangle.point0().equal(point0))
    })
  })

  describe('point1()', () => {
    it('zero', () => {
      const point1 = new Point(0, 0)
      const rectangle = new Rectangle(new Point(0, 0), point1)
      assert.ok(rectangle.point1().equal(point1))
    })

    it('nonzero', () => {
      const point1 = new Point(1, 1)
      const rectangle = new Rectangle(new Point(0, 0), point1)
      assert.ok(rectangle.point1().equal(point1))
    })
  })

  describe('topLeft()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.topLeft().equal(new Point(0, 0)))
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.ok(rectangle.topLeft().equal(new Point(0, 1)))
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.topLeft().equal(new Point(0, 1)))
    })

    it('negative', () => {
      const rectangle = new Rectangle(new Point(-1, -1), new Point(0, 0))
      assert.ok(rectangle.topLeft().equal(new Point(-1, 0)))
    })
  })

  describe('bottomLeft()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.bottomLeft().equal(new Point(0, 0)))
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.ok(rectangle.bottomLeft().equal(new Point(0, 0)))
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.bottomLeft().equal(new Point(0, 0)))
    })

    it('negative', () => {
      const rectangle = new Rectangle(new Point(-1, -1), new Point(0, 0))
      assert.ok(rectangle.bottomLeft().equal(new Point(-1, -1)))
    })
  })

  describe('bottomRight()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.bottomRight().equal(new Point(0, 0)))
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.ok(rectangle.bottomRight().equal(new Point(1, 0)))
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.bottomRight().equal(new Point(1, 0)))
    })

    it('negative', () => {
      const rectangle = new Rectangle(new Point(-1, -1), new Point(0, 0))
      assert.ok(rectangle.bottomRight().equal(new Point(0, -1)))
    })
  })

  describe('topRight()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.topRight().equal(new Point(0, 0)))
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.ok(rectangle.topRight().equal(new Point(1, 1)))
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.topRight().equal(new Point(1, 1)))
    })

    it('negative', () => {
      const rectangle = new Rectangle(new Point(-1, -1), new Point(0, 0))
      assert.ok(rectangle.topRight().equal(new Point(0, 0)))
    })
  })

  describe('points()', () => {
    it('empty', () => {
      const point = new Point(0, 0)
      const rectangle = new Rectangle(point, point)
      assert.deepEqual(rectangle.points(), [point, point, point, point])
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      const expected = [new Point(0, 1), new Point(0, 0), new Point(1, 0),
        new Point(1, 1)]
      assert.deepEqual(rectangle.points(), expected)
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      const expected = [new Point(0, 1), new Point(0, 0), new Point(1, 0),
        new Point(1, 1)]
      assert.deepEqual(rectangle.points(), expected)
    })

    it('negative', () => {
      const rectangle = new Rectangle(new Point(-1, -1), new Point(0, 0))
      const expected = [new Point(-1, 0), new Point(-1, -1), new Point(0, -1),
        new Point(0, 0)]
      assert.deepEqual(rectangle.points(), expected)
    })
  })

  describe('width()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.deepEqual(rectangle.width(), 0)
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.deepEqual(rectangle.width(), 1)
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.deepEqual(rectangle.width(), 1)
    })
  })

  describe('length()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.deepEqual(rectangle.length(), 0)
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.deepEqual(rectangle.length(), 1)
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.deepEqual(rectangle.length(), 1)
    })
  })

  describe('area()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.deepEqual(rectangle.area(), 0)
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      assert.deepEqual(rectangle.area(), 1)
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.deepEqual(rectangle.area(), 1)
    })
  })

  describe('empty()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.empty())
    })

    it('nonempty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(!rectangle.empty())
    })
  })

  describe('square()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.ok(rectangle.square())
    })

    it('square', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.square())
    })

    it('rectangle', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 2))
      assert.ok(!rectangle.square())
    })
  })

  describe('diagonal()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.deepEqual(rectangle.diagonal(), 0)
    })

    it('lhs > rhs', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle = new Rectangle(new Point(3, 4), new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      assert.deepEqual(rectangle.diagonal(), 5)
    })

    it('lhs < rhs', () => {
      // eslint-disable-next-line no-magic-numbers
      const rectangle = new Rectangle(new Point(0, 0), new Point(3, 4))
      // eslint-disable-next-line no-magic-numbers
      assert.deepEqual(rectangle.diagonal(), 5)
    })
  })

  describe('perimeter()', () => {
    it('empty', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      assert.deepEqual(rectangle.perimeter(), 0)
    })

    it('lhs > rhs', () => {
      const rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
      // eslint-disable-next-line no-magic-numbers
      assert.deepEqual(rectangle.perimeter(), 4)
    })

    it('lhs < rhs', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      // eslint-disable-next-line no-magic-numbers
      assert.deepEqual(rectangle.perimeter(), 4)
    })
  })

  describe('containsPoint()', () => {
    it('disjoint', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(!rectangle.containsPoint(new Point(2, 2)))
    })

    it('borders', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      assert.ok(rectangle.containsPoint(new Point(1, 1)))
    })

    it('contains', () => {
      const rectangle = new Rectangle(new Point(0, 0), new Point(2, 2))
      assert.ok(rectangle.containsPoint(new Point(1, 1)))
    })
  })

  describe('containsRectangle()', () => {
    it('disjoint', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(2, 2), new Point(2, 2))
      assert.ok(!rectangle0.containsRectangle(rectangle1))
    })

    it('borders', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(1, 1), new Point(1, 1))
      assert.ok(rectangle0.containsRectangle(rectangle1))
    })

    it('intersects', () => {
      const rectangle0 = new Rectangle(new Point(1, 1), new Point(2, 2))
      // eslint-disable-next-line no-magic-numbers
      const rectangle1 = new Rectangle(new Point(0, 0), new Point(3, 3))
      assert.ok(!rectangle0.containsRectangle(rectangle1))
    })

    describe('contains', () => {
      it('self', () => {
        const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        assert.ok(rectangle.containsRectangle(rectangle))
      })

      it('other', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle0 = new Rectangle(new Point(0, 0), new Point(3, 3))
        const rectangle1 = new Rectangle(new Point(1, 1), new Point(2, 2))
        assert.ok(rectangle0.containsRectangle(rectangle1))
      })
    })
  })

  describe('intersection()', () => {
    it('disjoint', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(2, 2), new Point(2, 2))
      assert.ok(rectangle0.intersection(rectangle1).empty())
    })

    it('borders', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(1, 1), new Point(2, 2))
      assert.ok(rectangle0.intersection(rectangle1).empty())
    })

    it('intersects', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(2, 1))
      const rectangle1 = new Rectangle(new Point(1, 0), new Point(2, 2))
      const intersection = rectangle0.intersection(rectangle1)
      const expected = new Rectangle(new Point(1, 0), new Point(2, 1))
      assert.ok(intersection.equal(expected))
    })

    describe('contains', () => {
      it('self', () => {
        const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        const intersection = rectangle.intersection(rectangle)
        assert.ok(intersection.equal(rectangle))
      })

      it('other', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle0 = new Rectangle(new Point(0, 0), new Point(3, 3))
        const rectangle1 = new Rectangle(new Point(1, 1), new Point(2, 2))
        const intersection = rectangle0.intersection(rectangle1)
        assert.ok(intersection.equal(rectangle1))
      })
    })
  })

  describe('intersects()', () => {
    it('disjoint', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(2, 2), new Point(2, 2))
      assert.ok(!rectangle0.intersects(rectangle1))
    })

    it('borders', () => {
      const rectangle0 = new Rectangle(new Point(0, 0), new Point(1, 1))
      const rectangle1 = new Rectangle(new Point(1, 1), new Point(2, 2))
      assert.ok(rectangle0.intersects(rectangle1))
    })

    it('intersects', () => {
      const rectangle0 = new Rectangle(new Point(1, 1), new Point(2, 2))
      // eslint-disable-next-line no-magic-numbers
      const rectangle1 = new Rectangle(new Point(0, 0), new Point(3, 3))
      assert.ok(rectangle0.intersects(rectangle1))
    })

    describe('contains', () => {
      it('self', () => {
        const rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        assert.ok(rectangle.intersects(rectangle))
      })

      it('other', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle0 = new Rectangle(new Point(0, 0), new Point(3, 3))
        const rectangle1 = new Rectangle(new Point(1, 1), new Point(2, 2))
        assert.ok(rectangle0.intersects(rectangle1))
      })
    })
  })
})