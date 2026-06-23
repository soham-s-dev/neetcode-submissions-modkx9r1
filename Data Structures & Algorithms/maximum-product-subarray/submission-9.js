class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
       let max = 1, min = 1;
       let globalMax = nums[0];

        for(let i = 0; i < nums.length; i++) {
            let tempMax = max;
            max = Math.max(tempMax * nums[i], nums[i], nums[i] * min);
            min = Math.min(tempMax * nums[i], nums[i], nums[i] * min);
            globalMax = Math.max(max, globalMax);
        }
        return globalMax;
    }
}
