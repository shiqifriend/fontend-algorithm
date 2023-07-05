// 描述
// 给出一组区间，请合并所有重叠的区间。
// 请保证合并后的区间按区间起点升序排列。
// 示例1
// 输入：
// [[10,30],[20,60],[80,100],[150,180]]
// 返回值：
// [[10,60],[80,100],[150,180]]
// 示例2
// 输入：
// [[0,10],[10,20]]
// 返回值：
// [[0,20]]

/*
 * function Interval(a, b){
 *   this.start = a || 0;
 *   this.end = b || 0;
 * }
 */

/**
 * 
 * @param intervals Interval类一维数组 
 * @return Interval类一维数组
 */
function merge( intervals ) {
    // 按区间的左端点从小到大排序
    intervals.sort((a, b)=> a.start - b.start)
    const result = []
    // 当intervals数组不为空时，将首元素加入目标数组
    if(intervals[0]) result.push(intervals[0])
    // 从索引1开始遍历intervals数组，与target数组中的最后一个元素（区间）做对比
    for(let i = 1; i < intervals.length; i++){
        // target数组最后一个元素的右端点大于intervals[i]的右端点，表示intervals[i]位于当前区间内，不执行操作
        if(result[result.length-1].end > intervals[i].end) continue;
         // target数组最后一个元素的右端点大于intervals[i]的左端点，表示两个区间有交集，更新当前元素右端点
        else if(result[result.length-1].end >= intervals[i].start)
        result[result.length-1].end = intervals[i].end
        // 除以上情况外，表示两个区间无交集，将intervals[i]加入target数组
        else result.push(intervals[i])
    }
    return result
}
module.exports = { 
    merge : merge
};