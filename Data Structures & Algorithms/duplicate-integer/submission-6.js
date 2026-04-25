class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for(let num of nums){
            if(map[num]) return true;
            map[num] = (map[nums] || 0) + 1;
        }

        return false;
    }
}
