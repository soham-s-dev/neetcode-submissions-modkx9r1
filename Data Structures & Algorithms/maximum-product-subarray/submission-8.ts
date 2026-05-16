class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let max = 1, min = 1;
        let globalMax = nums[0];

        for(let i = 0; i < nums.length; i++) {
            let tempMax = max;
            max = Math.max(nums[i] * tempMax, nums[i] * min, nums[i]);
            min = Math.min(nums[i] * tempMax, nums[i] * min, nums[i]);
            globalMax = Math.max(max, globalMax);
            console.log(max, min);
        }

        return globalMax;
    }
}
