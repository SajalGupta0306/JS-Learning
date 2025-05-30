// lru cache
// lru
// cache

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.storageMap = new Map();
  }

  get(key) {
    if (!this.storageMap.get(key)) {
      return -1;
    }
    const val = this.storageMap.get(key);
    // delete operation to delete from its original place and then put in the most recent place or say on the top
    this.storageMap.delete(key);
    this.storageMap.set(key, val);
    return val;
  }

  put(key, value) {
    debugger;
    if (this.get(key) === -1) {
      // means that item is not in map, so put item
      if (this.capacity === this.storageMap.size) {
        // we need to delete first item from map
        const firstItem = Array.from(this.storageMap)[0];
        const firstItemKey = firstItem[0]; // return [key, value] - hence firstItem[0]
        this.storageMap.delete(firstItemKey);
      }
    }
    // adding to map, whatever be the situation
    // 1. replacing value of key
    // 2. adding new key value
    this.storageMap.set(key, value);
  }
}

const cache = new LRUCache(3);
cache.put(1, 10);
console.log(cache.storageMap);
cache.put(2, 20);
console.log(cache.storageMap);
cache.get(1);
console.log(cache.storageMap);
cache.put(3, 50);
console.log(cache.storageMap);
cache.put(3, 40);
console.log(cache.storageMap);
