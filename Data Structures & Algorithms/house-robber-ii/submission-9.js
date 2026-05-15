class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let n = nums.length;
        if(n === 1) return nums[0];
        if(n === 2) return Math.max(nums[0], nums[1]);

        let odds = nums.slice(0, -1);
        let evens = nums.slice(1);

        let dp1 = new Array(n).fill(0);
        let dp2 = new Array(n).fill(0);

        dp1[0] = odds[0];
        dp1[1] = Math.max(odds[0], odds[1]);

        dp2[0] = evens[0];
        dp2[1] = Math.max(evens[0], evens[1]);

    
        for(let i = 2; i < n - 1; i++) {
            dp1[i] = Math.max(odds[i] + dp1[i - 2], dp1[i - 1]);
            dp2[i] = Math.max(evens[i] + dp2[i - 2], dp2[i - 1]);
        }
        console.log(dp1, dp2);

        return Math.max(dp1[n - 2], dp2[n - 2]);
    }
}
