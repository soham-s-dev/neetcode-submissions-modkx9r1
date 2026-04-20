class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];

        function backTrack(i, curr) {
            res.push([...curr]);

            for(let j = i; j < nums.length; j++) {
                curr.push(nums[j]);
                backTrack(j + 1, curr);
                curr.pop();
            }
        }

        backTrack(0, []);

        return res;
    }
}
