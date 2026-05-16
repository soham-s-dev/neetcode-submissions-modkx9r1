class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        let n = nums.length;
        let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(0));

        for(let i = n - 1; i >= 0; i--) {
            for(let j = i - 1; j >= -1; j--) {
                let max1 = dp[i + 1][j + 1], max2 = 0;
                
                if(j === -1 || nums[j] < nums[i]) {
                    max2 = 1 + dp[i + 1][i + 1];
                }
                dp[i][j + 1] = Math.max(max1, max2);
            } 
        }

        return dp[0][0];
    }
}
