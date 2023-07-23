// 描述
// 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆
// 序对。输入一个数组,求出这个数组中的逆序对的总数P。并将P对1000000007取模的
// 结果输出。 即输出P mod 1000000007
// 输入：
// [1,2,3,4,5,6,7,0]
// 复制
// 返回值：
// 7



function InversePairs(data)
{
    let sum = 0;
    mergeSort(data);
    return sum % 1000000007;
 function mergeSort(nums){
        if(nums.length < 2) return nums;
//         不断的划分过程，包括一边可能有空的情况
        let mid = Math.floor(nums.length / 2)
        let left = nums.slice(0,mid);
        let right = nums.slice(mid);
        return merge(mergeSort(left),mergeSort(right));
    }
function merge(left,right){
    let res = [];
    let leftlen = left.length;
    let rightlen = right.length;
    let len = leftlen + rightlen;
    for(let index = 0,i = 0,j =0;index < len;index ++){
        if(i>=leftlen) res[index] = right[j++];
        else if(j>=rightlen) res[index] = left[i++];
        else if(left[i]<=right[j]) res[index] = left[i++];
        else{
//             只有当大于的时候才计数
            res[index] = right[j++];
            sum += leftlen - i;
            sum = sum % 1000000007;
        }
    }
   //console.log(res)
    return res;
 }
}
module.exports = {
    InversePairs : InversePairs
};