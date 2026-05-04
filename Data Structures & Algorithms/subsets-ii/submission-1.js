class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        let res = [];

        nums.sort((a, b) => a - b);

        function backTrack(i, curr) {
            res.push([...curr]);

            for(let j = i; j < nums.length; j++) {
                curr.push(nums[j]);
                backTrack(j + 1, curr);
                curr.pop();
                while(nums[j] === nums[j + 1]) j++;
            }
        }

        backTrack(0, []);
        return res;
    }
}
