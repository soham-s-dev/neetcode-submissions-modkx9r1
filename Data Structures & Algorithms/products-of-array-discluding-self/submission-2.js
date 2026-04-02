class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = nums.reduce((prev, curr) => curr === 0 ? prev : curr * prev, 1);

        console.log(product);
        let zeroes = nums.filter(elem => elem === 0).length;

        let result = new Array(nums.length).fill(0);

        if(zeroes > 1) return result;

        for(let i = 0; i < nums.length; i++) {
            if(nums[i] === 0) result[i] = product;

            else result[i] = zeroes === 1 ? 0 : Math.floor(product / nums[i]);
        }

        return result;
    }
}





//Brute force is slow because we traverse array n*n times
//