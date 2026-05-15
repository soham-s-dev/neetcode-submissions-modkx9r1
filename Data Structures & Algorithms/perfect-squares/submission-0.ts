class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n: number): number {
        let dp = new Array(n + 1).fill(Infinity);

        dp[0] = 0;

        for(let i = 1; i <= n; i++) {
            for(let j = 1; j * j <= i; j++) {
                let square = j * j;
                dp[i] = Math.min(dp[i], 1 + dp[i - square]);
            }
        }
        
        return dp[n];
    }
}
