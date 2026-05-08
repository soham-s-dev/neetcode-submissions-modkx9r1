class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let w = Infinity, x = Infinity ,y = 0,z = 0;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > z) {
                y = z;
                z = nums[i];
            }

            else if(y < nums[i]) y = nums[i];
        }

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] < w) {
                x = w;
                w = nums[i];
            }

            else if(x > nums[i]) x = nums[i];
        }
        return (y * z) - (w * x);
    }
}

