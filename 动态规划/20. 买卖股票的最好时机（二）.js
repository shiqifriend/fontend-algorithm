// 描述
// 假设你有一个数组prices，长度为n，其中prices[i]是某只股票在第i天的价格，请根据这个价格数组，返回买卖股票能获得的最大收益
// 1. 你可以多次买卖该只股票，但是再次购买前必须卖出之前的股票
// 2. 如果不能获取收益，请返回0
// 3. 假设买入卖出均无手续费
// 输入：
// [8,9,2,5,4,7,1]
// 复制
// 返回值：
// 7
// 复制
// 说明：
// 在第1天(股票价格=8)买入，第2天(股票价格=9)卖出，获利9-8=1
// 在第3天(股票价格=2)买入，第4天(股票价格=5)卖出，获利5-2=3
// 在第5天(股票价格=4)买入，第6天(股票价格=7)卖出，获利7-4=3
// 总获利1+3+3=7，返回7      

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 计算最大收益
 * @param prices int整型一维数组 股票每一天的价格
 * @return int整型
 */
function maxProfit( prices ) {
    let income = 0
    if(prices.length <= 1) return income
    for(let i = 0; i < prices.length; i++){
        let temp = prices[i] - prices[i-1]
        if(temp > 0) income += temp
    }
    return income
}
module.exports = {
    maxProfit : maxProfit
};