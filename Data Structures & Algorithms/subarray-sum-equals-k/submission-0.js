class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let map = {0: 1};
        let count = 0;
        let sum = 0;

        for(let num of nums) {
            sum += num;

            if(map[sum - k]) {
                count += map[sum - k];
            }

            map[sum] = (map[sum] || 0) + 1;
            
        }
        return count;
    }
}
