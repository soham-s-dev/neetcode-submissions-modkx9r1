class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        let n = s.length;
        if(s.length === 0 || s[0] === '0') return 0;

        let dp = new Array(n + 1).fill(0);

        dp[0] = 1;
        dp[1] = 1;

        for(let i = 2; i <= n; i++) {
            if(s[i - 1] !== '0') {
                dp[i] += dp[i - 1];
            }

            let twoDigit = parseInt(s.substring(i - 2, i));
            if(twoDigit >= 10 && twoDigit <= 26) {
                dp[i] += dp[i - 2];
            }
        }
        return dp[n];
    }
}
