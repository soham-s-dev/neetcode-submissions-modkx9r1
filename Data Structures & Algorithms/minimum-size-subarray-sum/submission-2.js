class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0, r = 0;
        let sum = 0;
        let n = nums.length;
        let minLen = Infinity;

        while(r < n) {
            sum += nums[r];

            while(sum >= target) {
                sum -= nums[l];
                minLen = Math.min(minLen, r - l + 1);
                l++;
            }
            r++;
        }
        return minLen === Infinity ? 0 : minLen;
    }
}
