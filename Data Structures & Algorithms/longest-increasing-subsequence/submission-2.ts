class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let map = {};
        function dfs(i: number, j: number) {
            if(i >= nums.length) return 0;

            if(map[`${i}, ${j}`]) return map[`${i}, ${j}`];

            let max1 = 0, max2 = 0;
            if(j === -1 || nums[j] < nums[i]) {
                max1 = 1 + dfs(i + 1, i);
            }

            max2 = dfs(i + 1, j);


            map[`${i}, ${j}`] = Math.max(max1, max2);
            return map[`${i}, ${j}`];
        }

        return dfs(0, -1);
    }
}
