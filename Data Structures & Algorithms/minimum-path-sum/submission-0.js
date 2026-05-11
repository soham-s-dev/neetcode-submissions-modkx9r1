class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        let m = grid.length, n = grid[0].length;
        let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(Infinity));

        dp[m - 1][n - 1] = grid[m - 1][n - 1];
        dp[m][n - 1] = 0;

        for(let r = m - 1; r >= 0; r--) {
            for(let c = n - 1; c >= 0; c--) {
                dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1]);
            }
        }

        return dp[0][0];
    }
}
