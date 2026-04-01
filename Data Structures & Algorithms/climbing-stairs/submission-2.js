class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        return this.climb(n);
    }

    climb(n, memo = {}) {
        if(n < 0) return 0;

        else if(n === 0) return 1;

        else if(memo[n] !== undefined) return memo[n];

        else     
            return memo[n] = this.climb(n - 1, memo) + this.climb(n - 2, memo);
    }
}
