const assert = require('assert');
Object.freeze(assert);

//////////////////////////////

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

function DEqual(a1, a2) {
    let length1 = a1.length;
    let length2 = a2.length;

    if (!length1 === length2) return false;
    for (let i = 0; i < length1; i++)
    {
        let length12 = a1[i].length;
        let length22 = a2[i].length;
        if (!length22 === length12) return false;
        for (let j = 0; j < length22; j++)
        {
            if (a1[i][j] !== a2[i][j]) return false;
        }
    }
    return true;
}

describe('First_Task', () => {
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
});



///////////////////////////////

// const Make = require('./src/make.js');
//
// describe('Once', () => {
//   it('1', () => {
//       let abc = function(a,b)
//       {
//           return a+b;
//       }
//       const ars = Make(1,2,3)(abc);
//       assert.equal(ars, [1,20]);
//   });
// });

///////////////////////////////

const rec = require('./src/recursion.js');

describe('Third_Task', () => {
    describe('Array', () => {
        it('1', () => {
            let abc = {"value":100,"left":{"value":20},"right":{"value":25}}
            let c = rec(abc);
            const ars = DEqual(c,[[100], [20,25]]);
            assert.equal(ars,true);
        });
        it('2', () => {
            let abc = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};
            let c = rec(abc);
            const ars = DEqual(c,[[100], [90, 120], [70,99,110,130]]);
            assert.equal(ars,true);
        })
    });
});
