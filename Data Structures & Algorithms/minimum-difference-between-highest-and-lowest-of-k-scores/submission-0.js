class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let l = 0, r = k - 1;
        let kin = Infinity;

        nums.sort((a, b) => a - b);
        while(r < nums.length) {
            kin = Math.min(kin, nums[r] -  nums[l]);
            l++, r++;
        }

        return kin;

    }
}
