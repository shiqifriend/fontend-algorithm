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

console.log(JSON.stringify(112n));
// console.log( "1",JSON.stringify(122222222222222222222n));
