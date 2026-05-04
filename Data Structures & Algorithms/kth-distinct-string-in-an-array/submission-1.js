class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let uniques = [];
        let map = {};

        for(let s of arr) { 
            map[s] = (map[s] || 0) + 1;
        }
        
        for(let key in map) 
            if(map[key] < 2) uniques.push(key);
        return k > uniques.length ? "" : uniques[k - 1];
    }
}
