import Grid from '../src/Grid'
import Point from '../src/Point'
import Rectangle from '../src/Rectangle'
import RectangleArray from '../src/RectangleArray'

describe('Grid', () => {
  //  aa
  // 5aa◦◦◦◦
  // 4◦◦◦◦◦◦
  // 3◦cc◦◦◦
  // 2ecCbb◦
  // 1◦◦bbbd
  // 0◦◦bbb◦
  //  012345
  // eslint-disable-next-line max-len
  describe('{0 0 6 6 [a|0 5 2 7| b|2 0 5 3| c|1 2 3 4| d|5 1 6 2| e|0 2 1 3|]}', () => {
    const a: Rectangle = new Rectangle(new Point(0, 5), new Point(2, 7))
    const b: Rectangle = new Rectangle(new Point(2, 0), new Point(5, 3))
    const c: Rectangle = new Rectangle(new Point(1, 2), new Point(3, 4))
    const d: Rectangle = new Rectangle(new Point(5, 1), new Point(6, 2))
    const e: Rectangle = new Rectangle(new Point(0, 2), new Point(1, 3))
    let subject: Grid
    beforeEach(() => {
      subject = new Grid(a, b, c, d, e)
      subject.bounds = new Rectangle(new Point(0, 0), new Point(6, 6))
    })

    test('bounds', () => {
      const expected: Rectangle = new Rectangle(new Point(0, 0),
        new Point(6, 6))
      expect(subject.bounds.equal(expected)).toBe(true)
    })

    test('vacant b|2 0 5 3|', () => {
      expect(subject.vacant(b)).toBe(false)
    })

    test('vacant |1 6 1 6|', () => {
      const input: Rectangle = new Rectangle(new Point(1, 6), new Point(1, 6))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |9 9 9 9|', () => {
      const input: Rectangle = new Rectangle(new Point(9, 9), new Point(9, 9))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.vacant(input)).toBe(true)
    })

    test('vacant |5 2 6 3|', () => {
      const input: Rectangle = new Rectangle(new Point(5, 2), new Point(6, 3))
      expect(subject.vacant(input)).toBe(true)
    })

    test('vacancies', () => {
      const expected: RectangleArray = new RectangleArray(
                                                         // Area
        new Rectangle(new Point(3, 3), new Point(6, 6)), // 9
        new Rectangle(new Point(2, 4), new Point(6, 6)), // 8
        new Rectangle(new Point(0, 4), new Point(6, 5)), // 6
        new Rectangle(new Point(5, 2), new Point(6, 6)), // 4
        new Rectangle(new Point(0, 0), new Point(2, 2)), // 4
        new Rectangle(new Point(0, 3), new Point(1, 5)), // 2
        new Rectangle(new Point(5, 0), new Point(6, 1))  // 1
      )
      expect(subject.vacancies().equal(expected)).toBe(true)
    })

    test('largestVacancy', () => {
      const expected: Rectangle = new Rectangle(new Point(3, 3),
        new Point(6, 6))
      expect(subject.largestVacancy().equal(expected)).toBe(true)
    })

    test('equal self', () => expect(subject.equal(subject)).toBe(true))

    test('equal undefined', () => expect(subject.equal()).toBe(false))

    test('equal bounds differ', () => {
      expect(subject.equal(new Grid(...subject))).toBe(false)
    })

    test('equal entries differ', () => {
      const input: Grid = new Grid()
      input.bounds = subject.bounds
      expect(subject.equal(input)).toBe(false)
    })

    test('toString()', () => {
      // eslint-disable-next-line max-len
      const expected: string = '{0 0 6 6 [|0 5 2 7| |2 0 5 3| |1 2 3 4| |5 1 6 2| |0 2 1 3|]}'
      expect(subject.toString()).toBe(expected)
    })
  })

  describe('{0 0 0 0 []}', () => {
    let subject: Grid
    beforeEach(() => {
      subject = new Grid()
    })

    test('bounds', () => {
      const expected: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(subject.bounds.equal(expected)).toBe(true)
    })

    test('vacant |2 0 5 3|', () => {
      const input: Rectangle = new Rectangle(new Point(2, 0), new Point(5, 3))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |1 6 1 6|', () => {
      const input: Rectangle = new Rectangle(new Point(1, 6), new Point(1, 6))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |9 9 9 9|', () => {
      const input: Rectangle = new Rectangle(new Point(9, 9), new Point(9, 9))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |0 0 0 0|', () => {
      const input: Rectangle = new Rectangle(new Point(0, 0), new Point(0, 0))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacant |5 2 6 3|', () => {
      const input: Rectangle = new Rectangle(new Point(5, 2), new Point(6, 3))
      expect(subject.vacant(input)).toBe(false)
    })

    test('vacancies', () => {
      expect(subject.vacancies().equal(new RectangleArray())).toBe(true)
    })

    test('largestVacancy', () => {
      const expected: Rectangle = new Rectangle(new Point(0, 0),
        new Point(0, 0))
      expect(subject.largestVacancy().equal(expected)).toBe(true)
    })

    test('equal self', () => expect(subject.equal(subject)).toBe(true))

    test('equal undefined', () => expect(subject.equal()).toBe(false))

    test('equal bounds differ', () => {
      const input: Grid = new Grid(...subject)
      input.bounds = new Rectangle(new Point(0, 0), new Point(1, 1))
      expect(subject.equal(input)).toBe(false)
    })

    test('equal entries differ', () => {
      const input: Grid = new Grid(new Rectangle(new Point(0, 0),
        new Point(1, 1)))
      input.bounds = subject.bounds
      expect(subject.equal(input)).toBe(false)
    })

    test('toString()', () => expect(subject.toString()).toBe('{0 0 0 0 []}'))
  })
})