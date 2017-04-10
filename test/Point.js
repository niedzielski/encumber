import assert from 'assert'

import Point from '../src/Point'

describe('Point', () => {
  describe('equal()', () => {
    it('self', () => {
      const point = new Point(0, 0)
      assert.ok(point.equal(point))
    })

    it('null', () => {
      const point = new Point(0, 0)
      assert.ok(!point.equal(null))
    })

    it('unequal', () => {
      const lhs = new Point(0, 0)
      const rhs = new Point(1, 1)
      assert.ok(!lhs.equal(rhs))
    })

    it('equal', () => {
      const lhs = new Point(1, 1)
      const rhs = new Point(1, 1)
      assert.ok(lhs.equal(rhs))
    })
  })

  describe('x()', () => {
    it('zero', () => {
      const point = new Point(0, 0)
      assert.deepEqual(point.x(), 0)
    })

    it('nonzero', () => {
      const point = new Point(1, 0)
      assert.deepEqual(point.x(), 1)
    })
  })

  describe('y()', () => {
    it('zero', () => {
      const point = new Point(0, 0)
      assert.deepEqual(point.y(), 0)
    })

    it('nonzero', () => {
      const point = new Point(0, 1)
      assert.deepEqual(point.y(), 1)
    })
  })
})