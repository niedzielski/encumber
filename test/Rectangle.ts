// eslint-disable-line max-lines

import Point from '../src/Point'
import Rectangle from '../src/Rectangle'

describe('Rectangle', () => {
  describe('Given an empty Rectangle at the origin |0 0 0 0|', () => {
    const point: Point = new Point(0, 0)
    const subject: Rectangle = new Rectangle(point, point)

    test('minimum()', () => {
      expect(subject.minimum().equal(point)).toBe(true)
    })

    test('maximum()', () => {
      expect(subject.maximum().equal(point)).toBe(true)
    })

    test('width()', () => expect(subject.width()).toBe(0))

    test('height()', () => expect(subject.height()).toBe(0))

    test('diagonal()', () => expect(subject.diagonal()).toBe(0))

    test('perimeter()', () => expect(subject.perimeter()).toBe(0))

    test('area()', () => expect(subject.area()).toBe(0))

    test('empty()', () => expect(subject.empty()).toBe(true))

    test('square()', () => expect(subject.square()).toBe(true))

    test('containsPoint(disjoint)', () => {
      expect(subject.containsPoint(new Point(1, 1))).toBe(false)
    })

    test('containsPoint(boundary)', () => {
      expect(subject.containsPoint(point)).toBe(true)
    })

    test('containsRectangle(self)', () => {
      expect(subject.containsRectangle(subject)).toBe(true)
    })

    test('intersection(self)', () => {
      expect(subject.intersection(subject).equal(subject)).toBe(true)
    })

    test('intersects(self)', () => {
      expect(subject.intersects(subject)).toBe(true)
    })

    test('complement(self)', () => {
      const actual: Rectangle[] = subject.complement(subject)
      expect(actual.length).toBe(0)
    })

    test('equal(self)', () => {
      expect(subject.equal(subject)).toBe(true)
    })

    test('equal(undefined)', () => {
      expect(subject.equal()).toBe(false)
    })

    test('toString()', () => expect(subject.toString()).toBe('|0 0 0 0|'))

    describe('and a second disjoint Rectangle |1 1 2 2|', () => {
      const input: Rectangle = new Rectangle(new Point(1, 1), new Point(2, 2))

      test('containsRectangle()', () => {
        expect(subject.containsRectangle(input)).toBe(false)
      })

      test('intersection()', () => {
        expect(subject.intersection(input).equal(subject)).toBe(true)
      })

      test('intersects()', () => {
        expect(subject.intersects(input)).toBe(false)
      })

      test('complement()', () => {
        const actual: Rectangle[] = subject.complement(input)
        expect(actual.length).toBe(0)
      })

      test('equal()', () => expect(subject.equal(input)).toBe(false))
    })
  })

  for (const sign of [-1, 1]) {
    for (const x of [0, 1]) {
      for (const y of [0, 1]) {
        const point0: Point = new Point(sign * x, sign * y)
        const point1: Point = new Point(sign * (1 - x), sign * (1 - y))
        const subject: Rectangle = new Rectangle(point0, point1)
        const description: string = 'Given a unit Rectangle at the origin with'
          + ` ${subject} order`

        describe(description, () => {
          test('equal(self)', () => {
            expect(subject.equal(subject)).toBe(true)
          })

          test('minimum()', () => {
            const point: Point = new Point(Math.min(0, sign), Math.min(0, sign))
            expect(subject.minimum().equal(point)).toBe(true)
          })

          test('maximum()', () => {
            const point: Point = new Point(Math.max(0, sign), Math.max(0, sign))
            expect(subject.maximum().equal(point)).toBe(true)
          })

          test('width()', () => expect(subject.width()).toBe(1))

          test('height()', () => expect(subject.height()).toBe(1))

          test('diagonal()', () => {
            expect(subject.diagonal()).toBe(Math.sqrt(2))
          })

          test('perimeter()', () => expect(subject.perimeter()).toBe(4))

          test('area()', () => expect(subject.area()).toBe(1))

          test('empty()', () => expect(subject.empty()).toBe(false))

          test('square()', () => expect(subject.square()).toBe(true))

          test('containsPoint(disjoint)', () => {
            expect(subject.containsPoint(new Point(2, 2))).toBe(false)
          })

          test('containsPoint(boundary)', () => {
            expect(subject.containsPoint(point0)).toBe(true)
          })

          test('containsRectangle(self)', () => {
            expect(subject.containsRectangle(subject)).toBe(true)
          })

          test('intersection(self)', () => {
            expect(subject.intersection(subject).equal(subject))
              .toBe(true)
          })

          test('intersects(self)', () => {
            expect(subject.intersects(subject)).toBe(true)
          })

          test('complement(self)', () => {
            const actual: Rectangle[] = subject.complement(subject)
            expect(actual.length).toBe(0)
          })

          test('equal(undefined)', () => expect(subject.equal()).toBe(false))

          describe('and a second disjoint Rectangle |2 2 3 3|', () => {
            const input: Rectangle = new Rectangle(new Point(2, 2),
              new Point(3, 3))

            test('containsRectangle()', () => {
              expect(subject.containsRectangle(input)).toBe(false)
            })

            test('intersection()', () => {
              const expected: Rectangle = new Rectangle(subject.maximum(),
                subject.maximum())
              expect(subject.intersection(input).equal(expected))
                .toBe(true)
            })

            test('intersects()', () => {
              expect(subject.intersects(input)).toBe(false)
            })

            test('complement()', () => {
              const actual: Rectangle[] = subject.complement(input)
              const expected: Rectangle[] = [subject]
              expect(actual.length).toBe(1)
              expect(actual[0].equal(expected[0])).toBe(true)
            })

            test('equal()', () => {
              expect(subject.equal(input)).toBe(false)
            })
          })
        })
      }
    }
  }

  describe('Given an oblong Rectangle |2 1 6 4|', () => {
    const minimum: Point = new Point(2, 1)
    const maximum: Point = new Point(6, 4)
    const subject: Rectangle = new Rectangle(minimum, maximum)

    test('minimum()', () => {
      expect(subject.minimum().equal(minimum)).toBe(true)
    })

    test('maximum()', () => {
      expect(subject.maximum().equal(maximum)).toBe(true)
    })

    test('width()', () => expect(subject.width()).toBe(4))

    test('height()', () => expect(subject.height()).toBe(3))

    test('diagonal()', () => expect(subject.diagonal()).toBe(5))

    test('perimeter()', () => expect(subject.perimeter()).toBe(14))

    test('area()', () => expect(subject.area()).toBe(12))

    test('empty()', () => expect(subject.empty()).toBe(false))

    test('square()', () => expect(subject.square()).toBe(false))

    test('containsPoint(disjoint)', () => {
      expect(subject.containsPoint(new Point(1, 1))).toBe(false)
    })

    test('containsPoint(boundary)', () => {
      expect(subject.containsPoint(minimum)).toBe(true)
    })

    test('containsRectangle(self)', () => {
      expect(subject.containsRectangle(subject)).toBe(true)
    })

    test('intersection(self)', () => {
      expect(subject.intersection(subject).equal(subject)).toBe(true)
    })

    test('intersects(self)', () => {
      expect(subject.intersects(subject)).toBe(true)
    })

    test('complement(self)', () => {
      const actual: Rectangle[] = subject.complement(subject)
      expect(actual.length).toBe(0)
    })

    test('equal(self)', () => expect(subject.equal(subject)).toBe(true))

    test('equal(undefined)', () => expect(subject.equal()).toBe(false))

    test('toString()', () => expect(subject.toString()).toBe('|2 1 6 4|'))

    describe('and a second superset Rectangle |1 0 7 5|', () => {
      const input: Rectangle = new Rectangle(new Point(1, 0), new Point(7, 5))

      test('containsRectangle()', () => {
        expect(subject.containsRectangle(input)).toBe(false)
      })

      test('intersection()', () => {
        expect(subject.intersection(input).equal(subject)).toBe(true)
      })

      test('intersects()', () => {
        expect(subject.intersects(input)).toBe(true)
      })

      test('complement()', () => {
        const actual: Rectangle[] = subject.complement(input)
        expect(actual.length).toBe(0)
      })

      test('equal()', () => expect(subject.equal(input)).toBe(false))
    })

    describe('and a second subset Rectangle |3 2 5 3|', () => {
      const input: Rectangle = new Rectangle(new Point(3, 2), new Point(5, 3))

      test('containsRectangle()', () => {
        expect(subject.containsRectangle(input)).toBe(true)
      })

      test('intersection()', () => {
        expect(subject.intersection(input).equal(input)).toBe(true)
      })

      test('intersects()', () => {
        expect(subject.intersects(input)).toBe(true)
      })

      test('complement()', () => {
        const actual: Rectangle[] = subject.complement(input)
        const expected: Rectangle[] = [
          new Rectangle(new Point(2, 3), new Point(6, 4)),
          new Rectangle(new Point(2, 1), new Point(3, 4)),
          new Rectangle(new Point(2, 1), new Point(6, 2)),
          new Rectangle(new Point(5, 1), new Point(6, 4))
        ]
        expect(actual.length).toBe(4)
        expect(actual[0].equal(expected[0])).toBe(true)
        expect(actual[1].equal(expected[1])).toBe(true)
        expect(actual[2].equal(expected[2])).toBe(true)
        expect(actual[3].equal(expected[3])).toBe(true)
      })

      test('equal()', () => expect(subject.equal(input)).toBe(false))
    })

    describe('and a second bordering Rectangle |0 0 2 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(2, 1))

      test('containsRectangle()', () => {
        expect(subject.containsRectangle(input)).toBe(false)
      })

      test('intersection()', () => {
        const expected: Rectangle = new Rectangle(new Point(2, 1),
          new Point(2, 1))
        expect(subject.intersection(input).equal(expected)).toBe(true)
      })

      test('intersects()', () => {
        expect(subject.intersects(input)).toBe(true)
      })

      test('complement()', () => {
        const actual: Rectangle[] = subject.complement(input)
        const expected: Rectangle[] = [
          new Rectangle(new Point(2, 1), new Point(6, 4))
        ]
        expect(actual.length).toBe(1)
        expect(actual[0].equal(expected[0])).toBe(true)
      })

      test('equal()', () => expect(subject.equal(input)).toBe(false))
    })

    describe('and a second overlapping Rectangle |0 0 3 3|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 3))

      test('containsRectangle()', () => {
        expect(subject.containsRectangle(input)).toBe(false)
      })

      test('intersection()', () => {
        const expected: Rectangle = new Rectangle(new Point(2, 1),
          new Point(3, 3))
        expect(subject.intersection(input).equal(expected)).toBe(true)
      })

      test('intersects()', () => {
        expect(subject.intersects(input)).toBe(true)
      })

      test('complement()', () => {
        const actual: Rectangle[] = subject.complement(input)
        const expected: Rectangle[] = [
          new Rectangle(new Point(2, 3), new Point(6, 4)),
          new Rectangle(new Point(3, 1), new Point(6, 4))
        ]
        expect(actual.length).toBe(2)
        expect(actual[0].equal(expected[0])).toBe(true)
        expect(actual[1].equal(expected[1])).toBe(true)
      })

      test('equal()', () => expect(subject.equal(input)).toBe(false))
    })
  })
})