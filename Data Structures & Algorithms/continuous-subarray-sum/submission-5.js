class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let prefix = new Array(nums.length + 1).fill(0);
        let map = {0: -1};
        prefix[0] = 0;

        for(let i = 0; i < nums.length; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        for(let i = 1; i < prefix.length; i++) {
            let r = ((prefix[i] % k) + k) % k;

            if(map[r] === undefined) {
                map[r] = i - 1;
            } else if(i - 1 - map[r] > 1) return true;
        }
        return false;
    }
}