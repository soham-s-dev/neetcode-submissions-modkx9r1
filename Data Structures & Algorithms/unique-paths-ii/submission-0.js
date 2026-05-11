class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        let m = grid.length, n = grid[0].length;
        if(grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return 0;

        let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));

        dp[m - 1][n - 1] = 1;

        for(let r = m - 1; r >= 0; r--) {
            for(let c = n - 1; c >= 0; c--) {
                if(grid[r][c] === 1) 
                    dp[r][c] = 0;
                else {
                    dp[r][c] += dp[r + 1][c] + dp[r][c + 1];
                }
            }
        }
        return dp[0][0];
    }
}
