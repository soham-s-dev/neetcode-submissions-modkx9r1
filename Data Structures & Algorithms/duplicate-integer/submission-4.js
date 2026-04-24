class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};

        for(let num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        for(let key in map) {
            if(map[key] > 1) return true;
        }

        return false;
    }
}
