class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l = 0, r = 0;
        let set = new Set();

        while(r < nums.length) {
            if(r - l > k) {
                set.delete(nums[l++]);
            }

            if(set.has(nums[r])) return true;

            set.add(nums[r++]);
        }
        return false;
    }
}
