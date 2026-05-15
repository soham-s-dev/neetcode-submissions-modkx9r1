class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */

    //dp[i - coin] kyu kiya hai? Kyuki, we are asking ourselves, 
    //ki i is the amount, usme se mai agar coin ke value jitni amount nikal du, 
    //to bachi amount ko banane me jitne coins lage the, 
    //unme ye ek aur add karke mai wapas wo amount bana lunga
    
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Infinity);

        dp[0] = 0;

        for(let i = 0; i <= amount; i++) {
            for(let coin of coins) {
                if(i - coin >= 0) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }

        return dp[amount] === Infinity ? -1 : dp[amount];
    }
}
