// 描述
// 现在有一个只包含数字的字符串，将该字符串转化成IP地址的形式，返回所有可能的情况。
// 例如：
// 给出的字符串为"25525522135",
// 返回["255.255.22.135", "255.255.221.35"]. (顺序没有关系)
// 输入：
// "25525522135"
// 复制
// 返回值：
// ["255.255.22.135","255.255.221.35"]

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return string字符串一维数组
 */
function restoreIpAddresses( s ) {
    const res = []
    const path = []
    function traceTrack(str, count) {
        if(count==4) {
            if(str=='') res.push(path.join('.'))
            return
        }
        for(let i =1; i<=3 && i<=str.length; i++){
            if(parseInt(str.substring(0,i)) <= 255){
                if(i>=2 && str[0]=='0') return
                path.push(str.substring(0,i))
                traceTrack(str.substring(i,str.length), count+1)
                path.pop()
            }
        }
    }
    traceTrack(s, 0)
    return res
}
module.exports = {
    restoreIpAddresses : restoreIpAddresses
};