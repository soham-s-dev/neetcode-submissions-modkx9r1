class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    minOperations(nums) {
        let map = {};
        let minOps = 0;

        for(let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        for(let key in map) {
            if(map[key] === 1) return -1;
            else minOps += Math.ceil(map[key] / 3);
        }
        return minOps;
    }
}
