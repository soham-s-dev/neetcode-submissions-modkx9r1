class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        let res = [];
        let used = new Array(nums.length).fill(0);

        nums.sort((a, b) => a - b);
        function backTrack(curr) {
            if(curr.length === nums.length) {
                res.push([...curr]);
                return;
            }

            for(let j = 0; j < nums.length; j++) {
                if(used[j] || (j > 0 && nums[j - 1] === nums[j] && !used[j - 1])) continue;
                used[j] = true;

                curr.push(nums[j]);
                backTrack(curr);
                curr.pop();

                used[j] = false;
            }
        }

        backTrack([]);
        return res;
    }
}
