// 描述
// 给定一个长度为 n 的数组 num 和滑动窗口的大小 size ，找出所有滑动窗口里数值的最大值。

// 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： {[2,3,4],2,6,2,5,1}， {2,[3,4,2],6,2,5,1}， {2,3,[4,2,6],2,5,1}， {2,3,4,[2,6,2],5,1}， {2,3,4,2,[6,2,5],1}， {2,3,4,2,6,[2,5,1]}。

// 窗口大于数组长度或窗口长度为0的时候，返回空。
// 输入：
// [2,3,4,2,6,2,5,1],3
// 复制
// 返回值：
// [4,4,6,6,6,5]
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型一维数组 
 * @param size int整型 
 * @return int整型一维数组
 */
function maxInWindows( num ,  size ) {

    const len = num.length - size
    return len < 0 || size === 0 ? [] : num.slice(0, len + 1).map((_, i) => Math.max(...num.slice(i, i+size)))
}
module.exports = {
    maxInWindows : maxInWindows
};













// 看不懂
function maxInWindows(num, size)
{
    let queue = []; // 队列存的是数组中某个值的下标，而不是存的他们的值，而且是按值的大小，队头>队尾降序存储
    let array = [];
    for(let i = 0 ; i < num.length ; i++){
        if(queue.length > 0){
            while(queue.length > 0 && num[queue[queue.length - 1]] <= num[i]){
                queue.pop();
            }
        }
        queue.push(i);
        if(i >= size - 1){ // 判断是否形成一个滑动窗口
            if(i - queue[0] >= size - 1){ // 判断滑动窗口最左边是否刚好与当前值达到最大窗口长度
                array.push(num[queue.shift()]); //最左边弹出，并保存最大值
            }else{
                array.push(num[queue[0]]); //不弹出，保存最大值
            }
        }
    }
    return array;
}
module.exports = {
    maxInWindows : maxInWindows
};