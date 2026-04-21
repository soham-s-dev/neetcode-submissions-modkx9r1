class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */


// nums 1 2 -3 4 -2
// Temp 1 2 -6 -12 -8
// Mxp 1 2 -3 4 48
// mip 1 2 -6 -24 -8
// gmx 1 2 2 4
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

