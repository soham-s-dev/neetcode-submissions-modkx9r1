class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {
            let r = nums.length - 1;
            while(i < r) {
                if(nums[i] === nums[r]) return nums[i];
                r--;
            }
        }
    }
}
