class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function backTrack(i, curr, sum) {
            if(sum > target) return;

            if(sum === target) {
                res.push([...curr]);
                return;
            }

            for(let j = i; j < nums.length; j++) {
                sum += nums[j];
                curr.push(nums[j]);
                backTrack(j, curr, sum);
                curr.pop();
                sum -= nums[j];
            }
        }

        backTrack(0, [], 0);
        return res;
    }
}
