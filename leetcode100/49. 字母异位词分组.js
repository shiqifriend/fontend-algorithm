/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()
    for(let str of strs) {
        let arr = Array.from(str)
        arr.sort()
        let key = arr.join()
        let list = map.get(key) ? map.get(key) : []
        list.push(str)
        map.set(key, list)
    }
    return Array.from(map.values())
};