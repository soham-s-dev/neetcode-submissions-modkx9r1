class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxNums = 0;
        let i = 0;
        let count = 0;
        while(i < nums.length) {
            if(nums[i] === 0) {
                count = 0;
                i++;
                continue;
            }

            count++;
            maxNums = Math.max(maxNums, count);
            i++;
        }
        return maxNums;
    }
}
