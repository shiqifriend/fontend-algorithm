// 描述
// 给出一个有序的整数数组 A 和有序的整数数组 B ，请将数组 B 合并到数组 A 中，变成一个有序的升序数组
// 输入：
// [4,5,6],[1,2,3]
// 返回值：
// [1,2,3,4,5,6]
// 说明：
// A数组为[4,5,6]，B数组为[1,2,3]，后台程序会预先将A扩容为[4,5,6,0,0,0]，B还是为[1,2,3]，m=3，n=3，
//传入到函数merge里面，然后请同学完成merge函数，将B的数据合并A里面，最后后台程序输出A数组         


/**
 * 
 * @param A int整型一维数组 
 * @param B int整型一维数组 
 * @return void
 */
function merge( A, m, B, n ) {
    for(let i = 0, j = 0; j < n; i++){
        if(A[i] > B[j] || i - j > m){
            A.splice(i, 0, B[j++])
        }
    }
}
module.exports = {
    merge : merge
};