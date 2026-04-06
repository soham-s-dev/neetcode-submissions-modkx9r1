class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProductDifference(nums) {
        let max = 0, prevMax = 0, min = Infinity, nextMin = Infinity;

        for(let i = 0; i < nums.length; i++) {
            if(max < nums[i]) {
                prevMax = max;
                max = nums[i];

            } else if(prevMax < nums[i]) prevMax = nums[i];

        }

        for(let i = 0; i < nums.length; i++) {
            if(min > nums[i]) {
                nextMin = min;
                min = nums[i];

            } else if(nextMin > nums[i]) nextMin = nums[i];
            
        }
        return (max * prevMax) - (min * nextMin);
    }
}
