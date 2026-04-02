class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};
        let arr = Array.from({length: nums.length + 1}, () => []);
        for(let i = 0; i < nums.length; i++) {
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        for(let n in map) {
            arr[map[n]].push(n);
        }

        let res = [];
        for(let i = arr.length - 1; i >=0; i--) {
            for(let num of arr[i]) {
                if(k <= 0) return res;
                res.push(num);
                k--;
            }
        }
        return res;
    }
}
