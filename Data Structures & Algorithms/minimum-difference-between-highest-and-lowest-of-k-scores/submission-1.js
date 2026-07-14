class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let min = Infinity;
        nums.sort((a, b) => a - b);

        let l = 0, r = l + k - 1;

        while(r < nums.length) {
            let highest = nums[r];
            let lowest = nums[l];
            min = Math.min(min, highest - lowest);
            l++, r++;
        }

        return min;
    }
}
