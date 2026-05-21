class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    checkSubarraySum(nums, k) {
        let map = {0 : -1};
        let sum = 0;

        for(let i = 0; i < nums.length; i++) {
            sum += nums[i];
            let rem = ((sum % k) + k) % k;

            if(map[rem] == undefined)
                map[rem] = i;
            
            else if(i - map[rem] > 1) return true;

        }
        return false;
    }
}
