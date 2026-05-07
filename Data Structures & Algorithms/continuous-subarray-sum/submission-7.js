class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let total = 0;
        let map = {0 : -1};
        for(let i = 0; i < nums.length; i++) {
            total += nums[i];
            let rem = ((total % k) + k) % k;

            if(map[rem] === undefined) {
                map[rem] = i;
            } else if(i - map[rem] > 1) return true;
        }

        return false;
    }
}
