class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    rearrangeArray(nums) {
        let res = new Array(nums.length).fill(0);
        let l = 0, r = 1;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) {
                res[l] = nums[i];
                l += 2;
            } else {
                res[r] = nums[i];
                r += 2;
            }
        }
        return res;
    }
}
