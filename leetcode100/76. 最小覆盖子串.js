/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Map()
    for(const c of t) map.set( c, map.get(c) + 1 || 1)
    const hash = new Map()
    let matchStr = ''
    const size = map.size
    let l = 0
    let matchs = 0
    for(let i = 0; i < s.length; i++) {
        if(map.has(s[i])) {
            hash.set(s[i], hash.get(s[i]) + 1 || 1)
            if(hash.get(s[i]) === map.get(s[i])) matchs++
        }
        while(matchs === size) {
            if(!matchStr || (i-l+1) < matchStr.length) {
                matchStr = s.slice(l, i+1)
            }
            if(hash.has(s[l])) {
                if(hash.get(s[l]) === map.get(s[l])) {
                    matchs--
                }
                hash.set(s[l], hash.get(s[l]) - 1)
            }
            l++
        }
        
    }
    return matchStr
};