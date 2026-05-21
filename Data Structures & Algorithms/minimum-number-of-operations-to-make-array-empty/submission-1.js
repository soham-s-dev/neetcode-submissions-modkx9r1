class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums) {
        let ops = 0;
        let map = {};

        for(let num of nums) map[num] = (map[num] || 0) + 1;

        for(let key in map) {
            if(map[key] === 1) return -1;
            else ops += Math.ceil(map[key] / 3);
        }

        return ops;
    }
}
