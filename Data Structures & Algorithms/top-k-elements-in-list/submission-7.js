class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let freq = Array.from({length: nums.length + 1}, () => new Array());
        let res = [];

        for(let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for(let key in map) {
            freq[map[key]].push(parseInt(key));
        }

        console.log(freq);

        for(let i = freq.length - 1; i >= 0; i--) {
            for(let j = 0; j < freq[i].length; j++) {
                if(k === 0) {
                    return res;
                }
                res.push(freq[i][j]);
                k--;
            }
        }
        return res;
    }
}
