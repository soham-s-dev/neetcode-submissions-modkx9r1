class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hTable = Array.from({length: nums.length + 1}, () => new Array());
        let map = {};
        let ans = [];

        for(let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for(let key in map) {
            hTable[map[key]].push(parseInt(key));
        }

        for(let i = hTable.length - 1; i >= 0; i--) {
            for(let j = hTable[i].length - 1; j >= 0; j--) {
                if(k === 0) return ans;
                ans.push(hTable[i][j]);
                k--;
            }
        }

        return ans;
    }
}
