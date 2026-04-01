class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let res = [];

        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i - 1]) continue;

            let j = i + 1, k = nums.length - 1;

            while(j < k) {
                if(nums[j] + nums[i] + nums[k] === 0) {
                     res.push([nums[i], nums[j], nums[k]]);
                     j++;
                     k--;
                     while(j < k && nums[j] === nums[j - 1]) j++;
                }
                else if(nums[j] + nums[k] + nums[i] > 0) k--;
                else {
                    j++;
                }
            }
        }
        return res;
    }
}
