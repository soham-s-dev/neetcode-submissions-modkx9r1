class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = {};
        for(let elem of nums) {
            if(map[elem] !== undefined) return true; 
            map[elem] = (map[elem] || 0) + 1;
        }

        return false;
    }
}
