class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        let total = 0;
        let res = 0;
        let l = 0;

        nums.sort((a, b) => a - b);

        for(let r = 0; r < nums.length; r++) {
            total += nums[r];

            while(nums[r] * (r - l + 1) > total + k) {
                total -= nums[l++];
            }

            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
