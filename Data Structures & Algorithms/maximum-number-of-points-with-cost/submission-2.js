class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    maxPoints(points) {
        let m = points.length, n = points[0].length;
        let dp = Array.from({length: m}, () => new Array(n).fill(0));

        for(let c = 0; c < n; c++) {
            dp[0][c] = points[0][c];
        }

        for(let r = 1; r < m; r++) {
            for(let c = 0; c < n; c++) {
                let max = 0;
                for(let i = 0; i < n; i++) {
                    max = Math.max(max, dp[r - 1][i] - Math.abs(i - c));
                }
                dp[r][c] = points[r][c] + max;
            }
        }
        console.log(dp);
        return Math.max(...dp[m - 1]);
    }
}
