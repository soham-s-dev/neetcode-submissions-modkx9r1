class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let arr = Array.from({length: nums.length + 1}, () => []);

        for(let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for(let n in map) {
           arr[map[n]].push(parseInt(n));
        }

        let res = [];
        for(let i = arr.length - 1; i > 0; i--) {
            for(let num of arr[i]) {
                res.push(num)
                if(res.length === k) return res;
            }
        }
    }
}
