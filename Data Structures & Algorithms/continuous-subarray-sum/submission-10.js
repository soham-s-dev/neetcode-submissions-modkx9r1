class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let map = {0 : -1};
        let sum = 0;

        for(let r = 0; r < nums.length; r++) {
            sum += nums[r];
            let rem = ((sum % k) + k) % k;

            if(map[rem] === undefined) {
                map[rem] = r;
            } else if(r - map[rem] > 1) return true;
        }
        return false;
    }
}
