class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let min = Infinity;

        for(let i = 0; i < nums.length; i++) {
            let r = i, sum = 0;
            while(r < nums.length) {
                sum += nums[r];

                if(sum >= target) {
                    min = Math.min(r - i + 1, min);
                    break;
                }
                r++;
            }
        }
        return min === Infinity ? 0 : min;
    }
}
