class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let incr = 1, decr = 1, res = 1;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i + 1] > nums[i]) {
                incr += 1;
                decr = 1;
            } else if(nums[i + 1] < nums[i]) {
                incr = 1;
                decr += 1;
            } else {
                incr = 1;
                decr = 1;
            }
            res = Math.max(incr, decr, res);
        }
        return res;
    }
}
