class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let i = 0;
        let map = {};
        return this.findMax(nums, 0, map);
    }

    findMax(nums, i, map) {
        if(i >= nums.length) return 0;

        if(map[i]) return map[i];

        let rob = nums[i] + this.findMax(nums, i + 2, map);

        let skip = this.findMax(nums, i + 1, map);

        map[i] = Math.max(rob, skip);   
        return map[i];
    }
}
