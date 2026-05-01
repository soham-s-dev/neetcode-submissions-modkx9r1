class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0], sum = nums[0];

        for(let i = 1; i < nums.length; i++) {
            if(nums[i - 1] < nums[i]) {
                sum += nums[i];
            } else {
                sum = nums[i];
            }
            maxSum = Math.max(sum, maxSum);
        }
        return maxSum;
    }
}
