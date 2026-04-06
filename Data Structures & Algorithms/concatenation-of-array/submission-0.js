class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = new Array(nums.length * 2).fill(0);

        let l = 0, r = nums.length, i = 0;
        while(i < nums.length) {
            ans[l] = nums[i];
            ans[r] = nums[i];
            i++; l++; r++;
        }
        return ans;
    }
}
