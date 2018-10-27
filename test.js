const assert = require('assert');
Object.freeze(assert);
const Sum = require('./src/SumOfOther.js');

function Equal (arr1,arr2){
    let length = arr1.length;
    if (!(length == arr2.length)) return false;
    for (let i = 0; i < length; i++)
    {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

describe('Array', () => {
  it('1', () => {
      const ars = Sum([5, 6, 7]);
      const res = Equal(ars,[13,12,11]);
      assert.equal(res, true);
  });
  it('2', () =>{
      const ars = Sum([1, 0, 0]);
      const res = Equal(ars,[0,'1',1]);
      assert.equal(res,false);
  })
});

describe('!Array', () => {
    it('1', () =>{
        const ars = Sum('abc');
        const res = (ars == "Not an array")
        assert.equal(res,true);
    })
    it('2', () =>{
        const ars = Sum({a:12});
        const res = (ars == "Not an array")
        assert.equal(res,true);
    })
});
