class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let res = 0, product = 1;
        let l = 0, r = 0;

        while(r < nums.length) {
            product *= nums[r];

            while(product >= k && l <= r) {
                product /= nums[l];
                l++;
            }

            res += r - l + 1;
            r++;
        }
        return res;
    }
}
