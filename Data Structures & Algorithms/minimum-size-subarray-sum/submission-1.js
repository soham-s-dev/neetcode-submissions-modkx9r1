class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0, r = 0;
        let min = Infinity;
        let sum = 0;
        while(r < nums.length) {
            sum += nums[r];

            while(sum >= target) {
                sum -= nums[l];
                min = Math.min(r - l + 1, min);
                l++;
            }
            r++;
        }
        return min === Infinity ? 0 : min;
    }
}
