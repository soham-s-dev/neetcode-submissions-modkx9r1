class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let maxProduct = 1, minProduct = 1;
        let i = 0;
        let globalMax = nums[0];

        while(i < nums.length) {
           let temp = maxProduct * nums[i];
           maxProduct = Math.max(nums[i], temp, minProduct * nums[i]);
           minProduct = Math.min(nums[i], temp, nums[i] * minProduct);
           globalMax = Math.max(maxProduct, globalMax);
           i++;
        }
        return globalMax;
    }
}
