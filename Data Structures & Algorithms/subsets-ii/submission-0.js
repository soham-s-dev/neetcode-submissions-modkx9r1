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
                if(j > i && nums[j] === nums[j - 1]) continue;
                curr.push(nums[j]);
                backTrack(j + 1, curr);
                curr.pop();
            }
        }

        backTrack(0, []);
        return res;
    }
}
