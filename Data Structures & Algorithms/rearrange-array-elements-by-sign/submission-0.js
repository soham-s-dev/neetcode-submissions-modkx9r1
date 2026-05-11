class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    rearrangeArray(nums) {
        let pos = [];
        let neg = [];

        for(let num of nums) {
            if(num < 0) neg.push(num);
            else pos.push(num);
        }

        for(let i = 0; i < nums.length / 2; i++) {
            nums[2 * i] = pos[i];
            nums[2 * i + 1] = neg[i];
        }
        return nums;
    }
}
