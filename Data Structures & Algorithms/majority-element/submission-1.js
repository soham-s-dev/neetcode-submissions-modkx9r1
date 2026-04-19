class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let [res, count] = [nums[0], 1];

        for(let i = 1; i < nums.length; i++) {
            if(count === 0) res = nums[i];

            if(res === nums[i]) count++;
            else count--;
        }
        return res;
    }
}
