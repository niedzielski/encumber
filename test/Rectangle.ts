// eslint-disable-line max-lines

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  describe('equal()', () => {
    describe('equal', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.equal(rectangle)).toBe(true)
      })

      test('order differs', () => {
        const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        const rhs: Rectangle = new Rectangle(new Point(1, 1), new Point(0, 0))
        expect(lhs.equal(rhs)).toBe(true)
      })

      test('coordinate differs', () => {
        const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        const rhs: Rectangle = new Rectangle(new Point(1, 0), new Point(0, 1))
        expect(lhs.equal(rhs)).toBe(true)
      })
    })

    describe('unequal', () => {
      test('unequal', () => {
        const lhs: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
        const rhs: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
        expect(lhs.equal(rhs)).toBe(false)
      })

      test('undefined', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.equal()).toBe(false)
      })
    })
  })

  describe('point0()', () => {
    test('origin', () => {
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
    test('origin', () => {
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

    describe('nonempty', () => {
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

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        // eslint-disable-next-line no-magic-numbers
        expect(rectangle.minimum().equal(new Point(1, 3))).toBe(true)
      })
    })
  })

  describe('maximum()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.maximum().equal(new Point(0, 0))).toBe(true)
    })

    describe('nonempty', () => {
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

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        // eslint-disable-next-line no-magic-numbers
        expect(rectangle.maximum().equal(new Point(2, 4))).toBe(true)
      })
    })
  })

  describe('width()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.width()).toBe(0)
    })

    describe('nonempty', () => {
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

      test('negative', () => {
        const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        expect(rectangle.width()).toBe(1)
      })

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        expect(rectangle.width()).toBe(1)
      })
    })
  })

  describe('height()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.height()).toBe(0)
    })

    describe('nonempty', () => {
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

      test('negative', () => {
        const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        expect(rectangle.height()).toBe(1)
      })

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        expect(rectangle.height()).toBe(1)
      })
    })
  })

  describe('diagonal()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.diagonal()).toBe(0)
    })

    describe('nonempty', () => {
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

      test('negative', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(-3, -4),
          new Point(0, 0))
        // eslint-disable-next-line no-magic-numbers
        expect(rectangle.diagonal()).toBe(5)
      })

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        expect(rectangle.diagonal()).toBe(Math.sqrt(2))
      })
    })
  })

  describe('perimeter()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.perimeter()).toBe(0)
    })

    describe('nonempty', () => {
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

      test('negative', () => {
        const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        // eslint-disable-next-line no-magic-numbers
        expect(rectangle.perimeter()).toBe(4)
      })

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        // eslint-disable-next-line no-magic-numbers
        expect(rectangle.perimeter()).toBe(4)
      })
    })
  })

  describe('area()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.area()).toBe(0)
    })

    describe('nonempty', () => {
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

      test('negative', () => {
        const rectangle: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        expect(rectangle.area()).toBe(1)
      })

      test('coordinates differ', () => {
        // eslint-disable-next-line no-magic-numbers
        const rectangle: Rectangle = new Rectangle(new Point(2, 3),
          new Point(1, 4)) // eslint-disable-line no-magic-numbers
        expect(rectangle.area()).toBe(1)
      })
    })
  })

  describe('empty()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.empty()).toBe(true)
    })

    test('nonempty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(1, 1))
      expect(rectangle.empty()).toBe(false)
    })
  })

  describe('square()', () => {
    test('empty', () => {
      const rectangle: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(rectangle.square()).toBe(true)
    })

    describe('nonempty', () => {
      test('square', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.square()).toBe(true)
      })

      test('oblong', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 2))
        expect(rectangle.square()).toBe(false)
      })
    })
  })

  describe('containsPoint()', () => {
    describe('empty', () => {
      test('disjoint', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.containsPoint(new Point(1, 1))).toBe(false)
      })

      test('boundary', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.containsPoint(new Point(0, 0))).toBe(true)
      })
    })

    describe('nonempty', () => {
      test('disjoint', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.containsPoint(new Point(2, 2))).toBe(false)
      })

      test('boundary', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.containsPoint(new Point(1, 1))).toBe(true)
      })

      test('within', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(2, 2))
        expect(rectangle.containsPoint(new Point(1, 1))).toBe(true)
      })
    })
  })

  describe('containsRectangle()', () => {
    describe('empty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.containsRectangle(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(true)
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(true)
      })
    })

    describe('nonempty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.containsRectangle(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      describe('intersects', () => {
        test('minimum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
        })

        test('maximum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
        })

        test('no corners contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(-1, -1),
            new Point(2, 2))
          expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
        })
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle0.containsRectangle(rectangle1)).toBe(true)
      })
    })
  })

  describe('intersection()', () => {
    describe('empty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.intersection(rectangle).equal(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersection(rectangle1).empty()).toBe(true)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.intersection(rectangle1).equal(rectangle1)).toBe(true)
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.intersection(rectangle1).equal(rectangle1)).toBe(true)
      })
    })

    describe('nonempty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.intersection(rectangle).equal(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersection(rectangle1).empty()).toBe(true)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        const expected: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.intersection(rectangle1).equal(expected)).toBe(true)
      })

      describe('intersects', () => {
        test('minimum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          const expected: Rectangle = new Rectangle(new Point(1, 1),
            new Point(1, 1))
          expect(rectangle0.intersection(rectangle1).equal(expected)).toBe(true)
        })

        test('maximum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const expected: Rectangle = new Rectangle(new Point(1, 1),
            new Point(1, 1))
          expect(rectangle0.intersection(rectangle1).equal(expected)).toBe(true)
        })

        test('no corners contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(-1, -1),
            new Point(2, 2))
          expect(rectangle0.intersection(rectangle1).equal(rectangle0))
            .toBe(true)
        })
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle0.intersection(rectangle1).equal(rectangle1)).toBe(true)
      })
    })
  })

  describe('intersects()', () => {
    describe('empty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        expect(rectangle.intersects(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersects(rectangle1)).toBe(false)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(1, 1))
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })
    })

    describe('nonempty', () => {
      test('self', () => {
        const rectangle: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle.intersects(rectangle)).toBe(true)
      })

      test('disjoint', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(0, 0))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersects(rectangle1)).toBe(false)
      })

      test('boundary', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
          new Point(2, 2))
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      describe('intersects', () => {
        test('minimum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          expect(rectangle0.intersects(rectangle1)).toBe(true)
        })

        test('maximum contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(1, 1),
            new Point(2, 2))
          const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          expect(rectangle0.intersects(rectangle1)).toBe(true)
        })

        test('no corners contained', () => {
          const rectangle0: Rectangle = new Rectangle(new Point(0, 0),
            new Point(1, 1))
          const rectangle1: Rectangle = new Rectangle(new Point(-1, -1),
            new Point(2, 2))
          expect(rectangle0.intersects(rectangle1)).toBe(true)
        })
      })

      test('within', () => {
        const rectangle0: Rectangle = new Rectangle(new Point(-1, -1),
          new Point(2, 2))
        const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
          new Point(1, 1))
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })
    })
  })
})