// 描述
// 假设你有一个数组prices，长度为n，其中prices[i]是股票在第i天的价格，请根据这个价格数组，返回买卖股票能获得的最大收益
// 1.你可以买入一次股票和卖出一次股票，并非每天都可以买入或卖出一次，总共只能买入和卖出一次，且买入必须在卖出的前面的某一天
// 2.如果不能获取到任何利润，请返回0
// 3.假设买入卖出均无手续费

// 输入：
// [8,9,2,5,4,7,1]
// 复制
// 返回值：
// 5
// 复制
// 说明：
// 在第3天(股票价格 = 2)的时候买入，在第6天(股票价格 = 7)的时候卖出，最大利
// 润 = 7-2 = 5 ，不能选择在第2天买入，第3天卖出，这样就亏损7了；同时，你也
// 不能在买入前卖出股票。


/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param prices int整型一维数组 
 * @return int整型
 */

// 思路：
//  * （1）将第一天看成价格最低，后续遍历的时候遇到价格更低则更新价格最低，
//  * （2）每次都比较最大收益与当日价格减去价格最低的值，选取最大值作为最大收益
//  * 时间复杂度：O(n)。
//  * 空间复杂度：0(1)，只使用了常数变量。

function maxProfit( prices ) {
    let maxProfit = 0
    if(prices.length <= 1) return maxProfit
    let minprice = prices[0]

    for(let i = 1; i < prices.length; i++){
        minprice = Math.min(prices[i], minprice)
        maxProfit = Math.max(maxProfit, prices[i] - minprice)
    }
    return maxProfit
} 
module.exports = {
    maxProfit : maxProfit
};