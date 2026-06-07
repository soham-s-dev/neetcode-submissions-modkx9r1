class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let ans = [];

        function backTrack(i, curr) {
            ans.push([...curr]);            

            for(let j = i; j < nums.length; j++) {
                curr.push(nums[j]);
                backTrack(j + 1, curr);
                curr.pop();
            }
        }

        backTrack(0, [])
        return ans;
    }


}
