class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            let product = 1;
            for(let j = i; j < nums.length; j++) {
                product *= nums[j];

                if(product < k) count++;
            }
        }
        return count;
    }
}
