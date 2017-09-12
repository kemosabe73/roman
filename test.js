var assert = require('assert')

describe('my feature', function()
{
  it('works', function()
    {
      assert.equal('A', 'A')
    })

    it('hallelujah', function()
    {
      assert.throws(function()
      {
        throw 'Error!'
      })
    })
})

describe('my other feature', function()
{
  it('async', function(done)
  {
    setTimeout(function()
    {
      done()
    }, 25)
  })
})
