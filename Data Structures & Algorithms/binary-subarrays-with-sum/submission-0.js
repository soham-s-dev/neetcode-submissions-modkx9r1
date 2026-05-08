class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        let res = 0;
        let prefix = 0;
        let map = {0 : 1};

        for(let num of nums) {
            prefix += num;
            res += map[prefix - goal] || 0;
            map[prefix] = (map[prefix] || 0) + 1;
        }

        return res;
    }
}
