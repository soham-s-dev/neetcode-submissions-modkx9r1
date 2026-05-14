class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let map = {};

        function decide(i) {
            if(i >= nums.length) return 0;

            if(map[i]) return map[i];

            map[i] = Math.max(nums[i] + decide(i + 2), decide(i + 1));

            return map[i];
        }
        return decide(0);
    }
}
