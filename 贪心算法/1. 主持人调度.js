// 描述
// 有 n 个活动即将举办，每个活动都有开始时间与活动的结束时间，第 i 个活动
// 的开始时间是 starti ,第 i 个活动的结束时间是 endi ,举办某个活动就需要
// 为该活动准备一个活动主持人。

// 一位活动主持人在同一时间只能参与一个活动。并且活动主持人需要全程参与
// 活动，换句话说，一个主持人参与了第 i 个活动，那么该主持人在 (starti,endi) 
// 这个时间段不能参与其他任何活动。求为了成功举办这 n 个活动，最少需要多少名主持人。

// 输入：
// 2,[[1,2],[2,3]]
// 复制
// 返回值：
// 1
// 复制
// 说明：
// 只需要一个主持人就能成功举办这两个活动      

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 计算成功举办活动需要多少名主持人
 * @param n int整型 有n个活动
 * @param startEnd int整型二维数组 startEnd[i][0]用于表示第i个活动的开始时间，startEnd[i][1]表示第i个活动的结束时间
 * @return int整型
 */
function minmumNumberOfHost( n ,  startEnd ) {
    // write code here
    let max = 0//保存最大时候需要主持人
    let sum = 0//当前需要的主持人
    let start = []//每个活动开始时间
    let end  = []//每个活动结束时间
    startEnd.map(arr=>{
        start.push(arr[0]);
        end.push(arr[1]);
    })//遍历，拿到开始和结束时间的值
    
    start.sort((a,b)=>{return a-b})//从先到后排序
    end.sort((a,b)=>{return a-b})
    
    while(start.length!= 0){
        if(start[0]>=end[0]){//都有=的原因是如果两个活动一个结束一个开始，主持人-1之后+1（一定要先-后+，看实例一）
            end.shift()//把数组头部丢出去
            sum-=1//结束一个活动当前需要的主持人-1，（去一个休息）
        }
        if(start[0]<=end[0]){
            start.shift()//把数组头部丢出去
            sum+=1//当前需要主持人+1
            max = sum>max?sum:max//判断当前需要的人数是否最大
        }
      
    }
    return max
    
}
module.exports = {
    minmumNumberOfHost : minmumNumberOfHost
};