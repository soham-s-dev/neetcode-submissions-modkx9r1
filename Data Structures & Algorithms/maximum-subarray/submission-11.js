class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0], sum = 0;
        let i = 0;

        while(i < nums.length) {
            if(sum < 0) {
                sum = 0;
                continue;
            }

            sum += nums[i];
            maxSum = Math.max(sum, maxSum);
            i++;
        }
        return maxSum;
    }
}
