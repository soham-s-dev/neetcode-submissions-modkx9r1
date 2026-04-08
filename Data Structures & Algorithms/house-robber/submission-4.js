class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        return this.robHouses(nums, 0, {});
    }

    robHouses(nums, i, map) {
        if(i >= nums.length) return 0;

        if(map[i]) return map[i];

        let rob = nums[i] + this.robHouses(nums, i + 2, map);

        let skip = this.robHouses(nums, i + 1, map);

        map[i] = Math.max(rob, skip);

        return map[i];
    }
}
