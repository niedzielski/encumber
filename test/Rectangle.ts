// eslint-disable-line max-lines

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  const testComplementSelf = (rectangle: Rectangle) => {
    const complement: Rectangle[] = rectangle.complement(rectangle)
    const minimum: Point = rectangle.minimum()
    const maximum: Point = rectangle.maximum()
    const expected = {
      top: new Rectangle(new Point(minimum.x(), maximum.y()), maximum),
      left: new Rectangle(minimum, new Point(minimum.x(), maximum.y())),
      bottom: new Rectangle(minimum, new Point(maximum.x(), minimum.y())),
      right: new Rectangle(new Point(maximum.x(), minimum.y()), maximum)
    }
    expect(complement[0].equal(expected.top)).toBe(true)
    expect(complement[1].equal(expected.left)).toBe(true)
    expect(complement[2].equal(expected.bottom)).toBe(true)
    expect(complement[3].equal(expected.right)).toBe(true)
  }

  describe('Given an empty Rectangle at the origin [0 0 0 0]', () => {
    const point: Point = new Point(0, 0)
    const rectangle0: Rectangle = new Rectangle(point, point)

    test('equal(self)', () => {
      expect(rectangle0.equal(rectangle0)).toBe(true)
    })

    test('equal(undefined)', () => {
      expect(rectangle0.equal()).toBe(false)
    })

    test('toString()', () => expect(rectangle0.toString()).toBe('[0 0 0 0]'))

    test('point0()', () => expect(rectangle0.point0().equal(point)).toBe(true))

    test('point1()', () => expect(rectangle0.point1().equal(point)).toBe(true))

    test('minimum()', () => {
      expect(rectangle0.minimum().equal(point)).toBe(true)
    })

    test('maximum()', () => {
      expect(rectangle0.maximum().equal(point)).toBe(true)
    })

    test('width()', () => expect(rectangle0.width()).toBe(0))

    test('height()', () => expect(rectangle0.height()).toBe(0))

    test('diagonal()', () => expect(rectangle0.diagonal()).toBe(0))

    test('perimeter()', () => expect(rectangle0.perimeter()).toBe(0))

    test('area()', () => expect(rectangle0.area()).toBe(0))

    test('empty()', () => expect(rectangle0.empty()).toBe(true))

    test('square()', () => expect(rectangle0.square()).toBe(true))

    test('containsPoint(disjoint)', () => {
      expect(rectangle0.containsPoint(new Point(1, 1))).toBe(false)
    })

    test('containsPoint(boundary)', () => {
      expect(rectangle0.containsPoint(point)).toBe(true)
    })

    test('containsRectangle(self)', () => {
      expect(rectangle0.containsRectangle(rectangle0)).toBe(true)
    })

    test('intersection(self)', () => {
      expect(rectangle0.intersection(rectangle0).equal(rectangle0)).toBe(true)
    })

    test('intersects(self)', () => {
      expect(rectangle0.intersects(rectangle0)).toBe(true)
    })

    test('complement(self)', () => {
      const complements: Rectangle[] = rectangle0.complement(rectangle0)
      expect(complements.length).toBe(4)
      for (const complement of complements) {
        expect(complement.equal(rectangle0)).toBe(true)
      }
    })

    describe('and a second disjoint Rectangle [1 1 2 2]', () => {
      const rectangle1: Rectangle = new Rectangle(new Point(1, 1),
        new Point(2, 2))

      test('equal()', () => expect(rectangle0.equal(rectangle1)).toBe(false))

      test('containsRectangle()', () => {
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('intersection()', () => {
        expect(rectangle0.intersection(rectangle1).equal(rectangle0)).toBe(true)
      })

      test('intersects()', () => {
        expect(rectangle0.intersects(rectangle1)).toBe(false)
      })

      test('complement()', () => {
        const complements: Rectangle[] = rectangle0.complement(rectangle1)
        expect(complements.length).toBe(4)
        for (const complement of complements) {
          expect(complement.equal(rectangle0)).toBe(true)
        }
      })
    })
  })

  for (const sign of [-1, 1]) {
    for (const x of [0, 1]) {
      for (const y of [0, 1]) {
        const point0: Point = new Point(sign * x, sign * y)
        const point1: Point = new Point(sign * (1 - x), sign * (1 - y))
        const rectangle0: Rectangle = new Rectangle(point0, point1)
        const description: string = 'Given a unit Rectangle at the origin with'
          + ` ${rectangle0} order`

        describe(description, () => {
          test('equal(self)', () => {
            expect(rectangle0.equal(rectangle0)).toBe(true)
          })

          test('equal(undefined)', () => expect(rectangle0.equal()).toBe(false))

          test('toString()', () => {
            const expected: String =`[${point0.x()} ${point0.y()} `
              + `${point1.x()} ${point1.y()}]`
            expect(rectangle0.toString()).toBe(expected)
          })

          test('point0()', () => {
            expect(rectangle0.point0().equal(point0)).toBe(true)
          })

          test('point1()', () => {
            expect(rectangle0.point1().equal(point1)).toBe(true)
          })

          test('minimum()', () => {
            const point: Point = new Point(Math.min(0, sign), Math.min(0, sign))
            expect(rectangle0.minimum().equal(point)).toBe(true)
          })

          test('maximum()', () => {
            const point: Point = new Point(Math.max(0, sign), Math.max(0, sign))
            expect(rectangle0.maximum().equal(point)).toBe(true)
          })

          test('width()', () => expect(rectangle0.width()).toBe(1))

          test('height()', () => expect(rectangle0.height()).toBe(1))

          test('diagonal()', () => {
            expect(rectangle0.diagonal()).toBe(Math.sqrt(2))
          })

          test('perimeter()', () => expect(rectangle0.perimeter()).toBe(4))

          test('area()', () => expect(rectangle0.area()).toBe(1))

          test('empty()', () => expect(rectangle0.empty()).toBe(false))

          test('square()', () => expect(rectangle0.square()).toBe(true))

          test('containsPoint(disjoint)', () => {
            expect(rectangle0.containsPoint(new Point(2, 2))).toBe(false)
          })

          test('containsPoint(boundary)', () => {
            expect(rectangle0.containsPoint(point0)).toBe(true)
          })

          test('containsRectangle(self)', () => {
            expect(rectangle0.containsRectangle(rectangle0)).toBe(true)
          })

          test('intersection(self)', () => {
            expect(rectangle0.intersection(rectangle0).equal(rectangle0))
              .toBe(true)
          })

          test('intersects(self)', () => {
            expect(rectangle0.intersects(rectangle0)).toBe(true)
          })

          test('complement(self)', () => testComplementSelf(rectangle0))

          describe('and a second disjoint Rectangle [2 2 3 3]', () => {
            const rectangle1: Rectangle = new Rectangle(new Point(2, 2),
              new Point(3, 3))

            test('equal()', () => {
              expect(rectangle0.equal(rectangle1)).toBe(false)
            })

            test('containsRectangle()', () => {
              expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
            })

            test('intersection()', () => {
              const expected: Rectangle = new Rectangle(rectangle0.maximum(),
                rectangle0.maximum())
              expect(rectangle0.intersection(rectangle1).equal(expected))
                .toBe(true)
            })

            test('intersects()', () => {
              expect(rectangle0.intersects(rectangle1)).toBe(false)
            })

            test('complement()', () => {
              const results: Rectangle[] = rectangle0.complement(rectangle1)
              const expected = {
                top: new Rectangle(
                  new Point(rectangle0.minimum().x(), rectangle0.maximum().y()),
                  rectangle0.maximum()
                ),
                left: rectangle0,
                bottom: rectangle0,
                right: new Rectangle(
                  new Point(rectangle0.maximum().x(), rectangle0.minimum().y()),
                  rectangle0.maximum()
                )
              }
              expect(results[0].equal(expected.top)).toBe(true)
              expect(results[1].equal(expected.left)).toBe(true)
              expect(results[2].equal(expected.bottom)).toBe(true)
              expect(results[3].equal(expected.right)).toBe(true)
            })
          })
        })
      }
    }
  }

  describe('Given an oblong Rectangle [2 1 6 4]', () => {
    const point0: Point = new Point(2, 1)
    const point1: Point = new Point(6, 4)
    const rectangle0: Rectangle = new Rectangle(point0, point1)

    test('equal(self)', () => expect(rectangle0.equal(rectangle0)).toBe(true))

    test('equal(undefined)', () => expect(rectangle0.equal()).toBe(false))

    test('toString()', () => expect(rectangle0.toString()).toBe('[2 1 6 4]'))

    test('point0()', () => expect(rectangle0.point0().equal(point0)).toBe(true))

    test('point1()', () => {
      expect(rectangle0.point1().equal(point1)).toBe(true)
    })

    test('minimum()', () => {
      expect(rectangle0.minimum().equal(point0)).toBe(true)
    })

    test('maximum()', () => {
      expect(rectangle0.maximum().equal(point1)).toBe(true)
    })

    test('width()', () => expect(rectangle0.width()).toBe(4))

    test('height()', () => expect(rectangle0.height()).toBe(3))

    test('diagonal()', () => expect(rectangle0.diagonal()).toBe(5))

    test('perimeter()', () => expect(rectangle0.perimeter()).toBe(14))

    test('area()', () => expect(rectangle0.area()).toBe(12))

    test('empty()', () => expect(rectangle0.empty()).toBe(false))

    test('square()', () => expect(rectangle0.square()).toBe(false))

    test('containsPoint(disjoint)', () => {
      expect(rectangle0.containsPoint(new Point(1, 1))).toBe(false)
    })

    test('containsPoint(boundary)', () => {
      expect(rectangle0.containsPoint(point0)).toBe(true)
    })

    test('containsRectangle(self)', () => {
      expect(rectangle0.containsRectangle(rectangle0)).toBe(true)
    })

    test('intersection(self)', () => {
      expect(rectangle0.intersection(rectangle0).equal(rectangle0)).toBe(true)
    })

    test('intersects(self)', () => {
      expect(rectangle0.intersects(rectangle0)).toBe(true)
    })

    test('complement(self)', () => testComplementSelf(rectangle0))

    describe('and a second superset Rectangle [1 0 7 5]', () => {
      const rectangle1: Rectangle = new Rectangle(new Point(1, 0),
        new Point(7, 5))

      test('equal()', () => expect(rectangle0.equal(rectangle1)).toBe(false))

      test('containsRectangle()', () => {
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('intersection()', () => {
        expect(rectangle0.intersection(rectangle1).equal(rectangle0)).toBe(true)
      })

      test('intersects()', () => {
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      test('complement()', () => {
        const complement: Rectangle[] = rectangle0.complement(rectangle1)
        const expected = {
          top: new Rectangle(new Point(2, 4), new Point(6, 4)),
          left: new Rectangle(new Point(2, 1), new Point(2, 4)),
          bottom: new Rectangle(new Point(2, 1), new Point(6, 1)),
          right: new Rectangle(new Point(6, 1), new Point(6, 4))
        }
        expect(complement[0].equal(expected.top)).toBe(true)
        expect(complement[1].equal(expected.left)).toBe(true)
        expect(complement[2].equal(expected.bottom)).toBe(true)
        expect(complement[3].equal(expected.right)).toBe(true)
      })
    })

    describe('and a second subset Rectangle [3 2 5 3]', () => {
      const rectangle1: Rectangle = new Rectangle(new Point(3, 2),
        new Point(5, 3))

      test('equal()', () => expect(rectangle0.equal(rectangle1)).toBe(false))

      test('containsRectangle()', () => {
        expect(rectangle0.containsRectangle(rectangle1)).toBe(true)
      })

      test('intersection()', () => {
        expect(rectangle0.intersection(rectangle1).equal(rectangle1)).toBe(true)
      })

      test('intersects()', () => {
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      test('complement()', () => {
        const results: Rectangle[] = rectangle0.complement(rectangle1)
        const expected = {
          top: new Rectangle(new Point(2, 3), new Point(6, 4)),
          left: new Rectangle(new Point(2, 1), new Point(3, 4)),
          bottom: new Rectangle(new Point(2, 1), new Point(6, 2)),
          right: new Rectangle(new Point(5, 1), new Point(6, 4))
        }
        expect(results[0].equal(expected.top)).toBe(true)
        expect(results[1].equal(expected.left)).toBe(true)
        expect(results[2].equal(expected.bottom)).toBe(true)
        expect(results[3].equal(expected.right)).toBe(true)
      })
    })

    describe('and a second bordering Rectangle [0 0 2 1]', () => {
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(2, 1))

      test('equal()', () => expect(rectangle0.equal(rectangle1)).toBe(false))

      test('containsRectangle()', () => {
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('intersection()', () => {
        const expected: Rectangle = new Rectangle(new Point(2, 1),
          new Point(2, 1))
        expect(rectangle0.intersection(rectangle1).equal(expected)).toBe(true)
      })

      test('intersects()', () => {
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      test('complement()', () => {
        const results: Rectangle[] = rectangle0.complement(rectangle1)
        const expected = {
          top: new Rectangle(new Point(2, 1), new Point(6, 4)),
          left: new Rectangle(new Point(2, 1), new Point(2, 4)),
          bottom: new Rectangle(new Point(2, 1), new Point(6, 1)),
          right: new Rectangle(new Point(2, 1), new Point(6, 4))
        }
        expect(results[0].equal(expected.top)).toBe(true)
        expect(results[1].equal(expected.left)).toBe(true)
        expect(results[2].equal(expected.bottom)).toBe(true)
        expect(results[3].equal(expected.right)).toBe(true)
      })
    })

    describe('and a second overlapping Rectangle [0 0 3 3]', () => {
      const rectangle1: Rectangle = new Rectangle(new Point(0, 0),
        new Point(3, 3))

      test('equal()', () => expect(rectangle0.equal(rectangle1)).toBe(false))

      test('containsRectangle()', () => {
        expect(rectangle0.containsRectangle(rectangle1)).toBe(false)
      })

      test('intersection()', () => {
        const expected: Rectangle = new Rectangle(new Point(2, 1),
          new Point(3, 3))
        expect(rectangle0.intersection(rectangle1).equal(expected)).toBe(true)
      })

      test('intersects()', () => {
        expect(rectangle0.intersects(rectangle1)).toBe(true)
      })

      test('complement()', () => {
        const results: Rectangle[] = rectangle0.complement(rectangle1)
        const expected = {
          top: new Rectangle(new Point(2, 3), new Point(6, 4)),
          left: new Rectangle(new Point(2, 1), new Point(2, 4)),
          bottom: new Rectangle(new Point(2, 1), new Point(6, 1)),
          right: new Rectangle(new Point(3, 1), new Point(6, 4))
        }
        expect(results[0].equal(expected.top)).toBe(true)
        expect(results[1].equal(expected.left)).toBe(true)
        expect(results[2].equal(expected.bottom)).toBe(true)
        expect(results[3].equal(expected.right)).toBe(true)
      })
    })
  })
})