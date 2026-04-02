class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let r = 0;
        let maxSum = nums[0];

        let sum = 0;
        while(r < nums.length) {
            if(sum < 0) {
                sum = 0;
            }

            sum += nums[r];
            maxSum = Math.max(maxSum, sum);
            r++;
        }
        return maxSum;
    }
}
