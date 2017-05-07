// eslint-disable-line max-lines
import Point from '../src/Point'
import Rectangle from '../src/Rectangle'
import RectangleArray from '../src/RectangleArray'

describe('RectangleArray', () => {
  describe('[a|-1 -1 1 1|]', () => {
    const a: Rectangle = new Rectangle(new Point(-1, -1), new Point(1, 1))
    let subject: RectangleArray
    beforeEach(() => {
      subject = new RectangleArray(a)
    })

    test('has |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.has(input)).toBe(false)
    })

    test('has |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.has(input)).toBe(false)
    })

    test('has |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.has(input)).toBe(false)
    })

    test('has a|-1 -1 1 1|', () => {
      expect(subject.has(a)).toBe(true)
    })

    test('at (0 0)', () => {
      expect(subject.at(new Point(0, 0)).equal(subject)).toBe(true)
    })

    test('at (1 1)', () => {
      expect(subject.at(new Point(1, 1)).equal(subject)).toBe(true)
    })

    test('at (3 1)', () => {
      expect(subject.at(new Point(3, 1)).equal(new RectangleArray())).toBe(true)
    })

    test('within |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.within(input).equal(new RectangleArray())).toBe(true)
    })

    test('within |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.within(input).equal(new RectangleArray())).toBe(true)
    })

    test('within |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.within(input).equal(new RectangleArray())).toBe(true)
    })

    test('within |-5 -5 5 5|', () => {
      const input: Rectangle = new Rectangle(new Point(-5, -5), new Point(5, 5))
      expect(subject.within(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('complement |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      const expected: RectangleArray = new RectangleArray(
        new Rectangle(new Point(-1, 0), new Point(1, 1)),
        new Rectangle(new Point(-1, -1), new Point(0, 1)),
        new Rectangle(new Point(-1, -1), new Point(1, 0)),
        new Rectangle(new Point(0, -1), new Point(1, 1))
      )
      expect(subject.complement(input).equal(expected)).toBe(true)
    })

    test('complement |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      const expected: RectangleArray = new RectangleArray(
        new Rectangle(new Point(-1, -1), new Point(0, 1)),
        new Rectangle(new Point(-1, -1), new Point(1, 0))
      )
      expect(subject.complement(input).equal(expected)).toBe(true)
    })

    test('complement |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      const expected: RectangleArray = new RectangleArray(
        new Rectangle(new Point(-1, -1), new Point(0, 1)),
        new Rectangle(new Point(-1, -1), new Point(1, 0))
      )
      expect(subject.complement(input).equal(expected)).toBe(true)
    })

    test('difference [|0 0 0 0|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(0, 0))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference [|0 0 1 1|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(1, 1))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference [|0 0 3 1|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(3, 1))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference self', () => {
      expect(subject.difference(subject).equal(new RectangleArray())).toBe(true)
    })

    test('remove |0 0 0 0|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(0, 0)))
      expect(subject.equal(new RectangleArray(a))).toBe(true)
    })

    test('remove |0 0 1 1|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(1, 1)))
      expect(subject.equal(new RectangleArray(a))).toBe(true)
    })

    test('remove |0 0 3 1|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(3, 1)))
      expect(subject.equal(new RectangleArray(a))).toBe(true)
    })

    test('remove |-1 -1 1 1|', () => {
      subject.remove(new Rectangle(new Point(-1, -1), new Point(1, 1)))
      expect(subject.equal(new RectangleArray())).toBe(true)
    })

    test('indexOf |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('indexOf |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('indexOf |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('indexOf |-1 -1 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(-1, -1), new Point(1, 1))
      expect(subject.indexOf(input)).toBe(0)
    })

    test('equal self', () => expect(subject.equal(subject)).toBe(true))

    test('equal undefined', () => expect(subject.equal()).toBe(false))

    test('toString()', () => expect(subject.toString()).toBe('[|-1 -1 1 1|]'))
  })

  // 5◦◦◦◦◦◦
  // 4◦◦◦ Df
  // 3◦◦◦ ff
  // 2◦◦◦cFf
  // 1bb◦cCf
  // 0Ab◦◦◦◦
  //  012345
  // eslint-disable-next-line max-len
  describe('[a|0 0 0 0| b|0 0 1 1| c|3 1 4 1| d|4 4 4 4| e|4 4 4 4| f|4 1 4 4|]', () => {
    const a: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
    const b: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
    const c: Rectangle = new Rectangle(new Point(3, 1), new Point(4, 2))
    const d: Rectangle = new Rectangle(new Point(4, 4), new Point(4, 4))
    const e: Rectangle = new Rectangle(new Point(4, 4), new Point(4, 4))
    const f: Rectangle = new Rectangle(new Point(4, 1), new Point(5, 4))
    let subject: RectangleArray
    beforeEach(() => {
      subject = new RectangleArray(a, b, c, d, e, f)
    })

    test('has a|0 0 0 0|', () => {
      expect(subject.has(a)).toBe(true)
    })

    test('has b|0 0 1 1|', () => {
      expect(subject.has(b)).toBe(true)
    })

    test('has |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.has(input)).toBe(false)
    })

    test('at (0 0)', () => {
      const expected: RectangleArray = new RectangleArray(a, b)
      expect(subject.at(new Point(0, 0)).equal(expected)).toBe(true)
    })

    test('at (1 1)', () => {
      const expected: RectangleArray = new RectangleArray(b)
      expect(subject.at(new Point(1, 1)).equal(expected)).toBe(true)
    })

    test('at (3 1)', () => {
      const expected: RectangleArray = new RectangleArray(c)
      expect(subject.at(new Point(3, 1)).equal(expected)).toBe(true)
    })

    test('at (5 5)', () => {
      expect(subject.at(new Point(5, 5)).equal(new RectangleArray())).toBe(true)
    })

    test('within a|0 0 0 0|', () => {
      expect(subject.within(a).equal(new RectangleArray(a))).toBe(true)
    })

    test('within b|0 0 1 1|', () => {
      const expected: RectangleArray = new RectangleArray(a, b)
      expect(subject.within(b).equal(expected)).toBe(true)
    })

    test('within |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      const expected: RectangleArray = new RectangleArray(a, b)
      expect(subject.within(input).equal(expected)).toBe(true)
    })

    test('within |5 5 5 5|', () => {
      const input: Rectangle = new Rectangle(new Point(5, 5), new Point(5, 5))
      expect(subject.within(input).equal(new RectangleArray())).toBe(true)
    })

    test('intersecting a|0 0 0 0|', () => {
      expect(subject.intersecting(a).equal(new RectangleArray(a, b))).toBe(true)
    })

    test('intersecting b|0 0 1 1|', () => {
      expect(subject.intersecting(b).equal(new RectangleArray(a, b))).toBe(true)
    })

    test('intersecting |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      const expected: RectangleArray = new RectangleArray(a, b, c)
      expect(subject.intersecting(input).equal(expected)).toBe(true)
    })

    test('complement a|0 0 0 0|', () => {
      const expected: RectangleArray = new RectangleArray(b, c, f)
      expect(subject.complement(a).equal(expected)).toBe(true)
    })

    test('complement b|0 0 1 1|', () => {
      expect(subject.complement(b).equal(new RectangleArray(c, f))).toBe(true)
    })

    test('complement |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      const expected: RectangleArray = new RectangleArray(c, f)
      expect(subject.complement(input).equal(expected)).toBe(true)
    })

    test('difference [a|0 0 0 0|]', () => {
      const input: RectangleArray = new RectangleArray(a)
      const expected: RectangleArray = new RectangleArray(b, c, d, e, f)
      expect(subject.difference(input).equal(expected)).toBe(true)
    })

    test('difference [b|0 0 1 1|]', () => {
      const input: RectangleArray = new RectangleArray(b)
      const expected: RectangleArray = new RectangleArray(a, c, d, e, f)
      expect(subject.difference(input).equal(expected)).toBe(true)
    })

    test('difference [|0 0 3 1|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(3, 1))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference self', () => {
      expect(subject.difference(subject).equal(new RectangleArray())).toBe(true)
    })

    test('remove a|0 0 0 0|', () => {
      subject.remove(a)
      expect(subject.equal(new RectangleArray(b, c, d, e, f))).toBe(true)
    })

    test('remove b|0 0 1 1|', () => {
      subject.remove(b)
      expect(subject.equal(new RectangleArray(a, c, d, e, f))).toBe(true)
    })

    test('remove |0 0 3 1|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(3, 1)))
      expect(subject.equal(new RectangleArray(a, b, c, d, e, f))).toBe(true)
    })

    test('indexOf a|0 0 0 0|', () => {
      expect(subject.indexOf(a)).toBe(0)
    })

    test('indexOf b|0 0 1 1|', () => {
      expect(subject.indexOf(b)).toBe(1)
    })

    test('indexOf |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('equal self', () => expect(subject.equal(subject)).toBe(true))

    test('equal undefined', () => expect(subject.equal()).toBe(false))

    test('toString', () => {
      // eslint-disable-next-line max-len
      const expected: string = '[|0 0 0 0| |0 0 1 1| |3 1 4 2| |4 4 4 4| |4 4 4 4| |4 1 5 4|]'
      expect(subject.toString()).toBe(expected)
    })
  })

  describe('[]', () => {
    let subject: RectangleArray
    beforeEach(() => {
      subject = new RectangleArray()
    })

    test('has |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.has(input)).toBe(false)
    })

    test('has |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.has(input)).toBe(false)
    })

    test('has |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.has(input)).toBe(false)
    })

    test('at (0 0)', () => {
      expect(subject.at(new Point(0, 0)).equal(subject)).toBe(true)
    })

    test('at (1 1)', () => {
      expect(subject.at(new Point(1, 1)).equal(subject)).toBe(true)
    })

    test('at (3 1)', () => {
      expect(subject.at(new Point(3, 1)).equal(subject)).toBe(true)
    })

    test('within |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.within(input).equal(subject)).toBe(true)
    })

    test('within |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.within(input).equal(subject)).toBe(true)
    })

    test('within |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.within(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('intersecting |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.intersecting(input).equal(subject)).toBe(true)
    })

    test('complement |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.complement(input).equal(subject)).toBe(true)
    })

    test('complement |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.complement(input).equal(subject)).toBe(true)
    })

    test('complement |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.complement(input).equal(subject)).toBe(true)
    })

    test('difference [|0 0 0 0|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(0, 0))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference [|0 0 1 1|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(1, 1))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference [|0 0 3 1|]', () => {
      const input: RectangleArray = new RectangleArray(
        new Rectangle(new Point(0, 0), new Point(3, 1))
      )
      expect(subject.difference(input).equal(subject)).toBe(true)
    })

    test('difference self', () => {
      expect(subject.difference(subject).equal(subject)).toBe(true)
    })

    test('remove |0 0 0 0|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(0, 0)))
      expect(subject.equal(new RectangleArray())).toBe(true)
    })

    test('remove |0 0 1 1|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(1, 1)))
      expect(subject.equal(new RectangleArray())).toBe(true)
    })

    test('remove |0 0 3 1|', () => {
      subject.remove(new Rectangle(new Point(0, 0), new Point(3, 1)))
      expect(subject.equal(new RectangleArray())).toBe(true)
    })

    test('indexOf |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('indexOf |0 0 1 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('indexOf |0 0 3 1|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(3, 1))
      expect(subject.indexOf(input)).toBe(-1)
    })

    test('equal self', () => expect(subject.equal(subject)).toBe(true))

    test('equal undefined', () => expect(subject.equal()).toBe(false))

    test('toString()', () => expect(subject.toString()).toBe('[]'))
  })
})