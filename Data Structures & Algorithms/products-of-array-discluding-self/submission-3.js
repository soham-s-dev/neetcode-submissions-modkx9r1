class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = nums.reduce((prev, curr) => curr ==- 0 ? prev : prev * curr, 1);

        let numberOfZeroes = nums.filter(elem => elem === 0).length;

        let res = new Array(nums.length).fill(0);

        if(numberOfZeroes > 1) return res;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) res[i] = product;
            else res[i] = numberOfZeroes === 1 ? 0 : Math.floor(product / nums[i]);
        }

        return res;
    }
}
