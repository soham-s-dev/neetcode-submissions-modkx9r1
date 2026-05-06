class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let set = new Set([...nums]);
        let res = [];
        for(let i = 1; i <= nums.length; i++) {
            if(!set.has(i)) res.push(i);
        }
        return res;
    }
}
