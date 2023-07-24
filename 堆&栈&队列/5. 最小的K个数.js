// 描述
// 给定一个长度为 n 的可能有重复值的数组，找出其中不去重的最小的 k 个数。例如
// 数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4(任意顺序皆可)。
// 输入：
// [4,5,1,6,2,7,3,8],4 
// 复制
// 返回值：
// [1,2,3,4]
// 复制
// 说明：
// 返回最小的4个数即可，返回[1,3,2,4]也可以   

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param input int整型一维数组 
 * @param k int整型 
 * @return int整型一维数组
 */
function GetLeastNumbers_Solution( input ,  k ) {
    // write code here
    if(k===0) return []
    let arr=input.slice(0,k)
    for(let i =k;i<input.length;i++){
        var max=0
        for(let j in arr){
            max=arr[j]>arr[max]?j:max
        }
        console.log(max)
        arr[max]=arr[max]>input[i]?input[i]:arr[max]
    }
    return arr
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};



// 思路：

// 将前k个元素放到heap中，对应代码第28行
// 将这k个元素调整成为大顶堆，这就保证了heap[0]一定是最大的元素
// input数组中第k个元素之后，逐一和heap[0]作比较，小于heap[0]则赋值给heap[0]，然后调整大顶堆
function GetLeastNumbers_Solution(input, k)
{
  function swap(i,j){
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
  function percDown(index,N){
    let root = heap[index];
    
    let parent,child;
    //为root找到合适的位置
    for( parent=index; parent*2+1<N; parent=child){
      child = parent*2+1;
      //child为两个parent中值小的那个元素
      if(child+1<N && heap[child+1]>heap[child])
        child++;
      
      if( root > heap[child] )//找到了合适位置break
        break;
      else
        heap[parent] = heap[child];
    }
    
    heap[parent] = root;
  }
  
  let heap = input.slice(0,k);
  
  //前k个元素建立最大堆
  for(let i=Math.floor(k/2)-1; i>=0; i-- ){
    percDown(i,k);//第i个到第N个为最大堆
  }
  
  for(let i=k; i<input.length; i++){
    if(input[i]<heap[0]){
      heap[0] = input[i];//新的元素比大顶堆的第一个还小的话，替换大顶堆的第一个元素，重新建堆
      percDown(0,k);
    }
  }
  
  return heap;
}
module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};
