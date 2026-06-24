class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ans = new Array(nums.length).fill(0);
        let numOfZeroes = nums.filter(elem => elem === 0).length;
        let product = nums.reduce((prev, curr) => curr === 0 ? prev : prev * curr);

        if(numOfZeroes > 1) return ans;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) ans[i] = product;

            else ans[i] = numOfZeroes > 0 ? 0 : Math.floor(product / nums[i]);
        }
        return ans;
    }
}
