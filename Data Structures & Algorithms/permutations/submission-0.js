class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let res = [];
        let used = new Array(nums.length).fill(false);

        function backTrack(curr) {
            if(curr.length === nums.length) {
                res.push([...curr]);
                return;
            }

            for(let j = 0; j < nums.length; j++) {
                if(used[j]) continue;

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
