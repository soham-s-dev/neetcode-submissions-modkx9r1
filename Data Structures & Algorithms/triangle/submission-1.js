class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle) {
        let m = triangle.length, n = triangle[triangle.length - 1].length;
        let dp = Array.from({length: m}, () => new Array(n).fill(Infinity));

        dp[0][0] = triangle[0][0];

        for(let i = 1; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(j === 0) 
                    dp[i][j] = dp[i - 1][j] + triangle[i][j];
                else if(j === triangle[i].length - 1)
                    dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
                else
                    dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
            }
        }

        return Math.min(...dp[m - 1]);
    }
}
