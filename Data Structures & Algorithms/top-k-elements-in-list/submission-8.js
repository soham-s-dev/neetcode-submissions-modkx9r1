class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let indices = Array.from({length: nums.length + 1}, () => new Array());
        for(let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for(let key in map) {
            indices[map[key]].push(parseInt(key));
        }

        let res = [];

        for(let i = indices.length - 1; i >= 0; i--) {
            for(let j = indices[i].length - 1; j >= 0; j--) {
                if(k === 0) return res;
                res.push(indices[i][j]);
                k--;
            }
        }
        return res;
    }
}
