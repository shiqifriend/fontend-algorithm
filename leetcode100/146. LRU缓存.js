/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.keySet = new Set()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)) {
        const value = this.cache.get(key)
        this.keySet.delete(key)
        this.keySet.add(key)
        return value
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)) {
        this.cache.set(key, value)
        this.keySet.delete(key)
        this.keySet.add(key)
    } else {
        if(this.cache.size === this.capacity) {
            const oldestKey = this.keySet.values().next().value
            this.cache.delete(oldestKey)
            this.keySet.delete(oldestKey)
        }
        this.cache.set(key, value)
        this.keySet.add(key)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */