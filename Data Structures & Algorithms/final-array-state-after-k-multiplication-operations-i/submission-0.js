class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        let n = 0;

        while(n < k) {
            let min = Infinity, minIndex = 0;
            for(let i = 0; i < nums.length; i++) {
                if(nums[i] < min) { 
                    min = nums[i];
                    minIndex = i;
                }
            }
            nums[minIndex] *= multiplier;
            n++;
        }
        return nums;
    }
}
