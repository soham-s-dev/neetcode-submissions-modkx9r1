class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArrayByParity(nums) {
        let l = 0, r = nums.length - 1;

        while(l < r) {
            if(nums[l] % 2 !== 0 && nums[r] % 2 === 0) {
                let temp = nums[l];
                nums[l] = nums[r];
                nums[r] = temp;
                l++; r--;
            } else if(nums[l] % 2 === 0) l++;
            else if(nums[r] % 2 !== 0) r--;
        }
        return nums;
    }
}
