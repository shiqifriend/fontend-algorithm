// 描述

// 给出两个字符串 s 和 t，要求在 s 中找出最短的包含 t 中所有字符的连续子串。
// 示例1
// 输入：
// "XDOYEZODEYXNZ","XYZ"
// 返回值：
// "YXNZ"
// 示例2
// 输入：
// "abcAbA","AA"
// 返回值：
// "AbA"


/**
  * 
  * @param S string字符串 
  * @param T string字符串 
  * @return string字符串
  */
function minWindow( S ,  T ) {
    const hash = new Map()
    for(let c of T) hash.set(c,hash.get(c) + 1 || 1)//用于统计需要的字符数
    const targetLength = hash.size
    const counts = new Map()
    let l = 0//左指针
    let res = ''//缓存结果
    let matchs = 0//匹配数量
    for(let i = 0; i < S.length; i++){
        if(hash.has(S[i])){//如果右指针指向的元素是需要的
            counts.set(S[i],counts.get(S[i]) + 1 || 1)//在counts中增加数量
            if(counts.get(S[i])===hash.get(S[i])) matchs++//如果当前字符个数够了就增加
        }
        while(matchs===targetLength){// 满足匹配时不断增加左指针
            if(!res || res.length > (i - l + 1)){//保存信息
                res = S.slice(l, i + 1)
            }
            if(counts.has(S[l])){// 如果左指针元素在counts中
                counts.set(S[l],counts.get(S[l]) - 1)//发生计数元素删除操作
                if(counts.get(S[l]) < hash.get(S[l])){// 如果元素删除后导致元素个数'不够了'，减少匹配数，判断的依据是‘不够了’，而不是不相同，因为有可能 counts 中数量有多的
                    matchs--// 如果当前字符个数不够了，减少匹配数
                }
            }
            l++// 增大左指针
        }
    }
    return res;
}
module.exports = {
    minWindow : minWindow
};