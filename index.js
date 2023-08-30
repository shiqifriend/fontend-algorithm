function change(obj, strArr = []) {
  if (!(obj instanceof Object)) return obj;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] instanceof Object) {
        change(obj[key], strArr);
      }
    }
  }
}

let array = [5, 3, 8, 4, 6];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      // 交换元素
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log(array); // 输出: [3,

function foo( n)
{
  if (n < 2) return n;
return foo(n - 1) + foo(n - 2);
}


console.log(JSON.stringify( {
  a: 3,
  b: 4,
  c: null,
  d: undefined,
  get e() {},
}));
// console.log( "1",JSON.stringify(122222222222222222222n));



const arr = [1,2,3,4,5]
let i = 0
arr.map(item=>{
  if(item === 3) arr.push(6)
  console.log(i++)
})