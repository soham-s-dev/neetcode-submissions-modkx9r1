class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    divideArray(nums) {
        let map = {};

        for(let num of nums) 
            map[num] = (map[num] || 0) + 1;

        for(let elem in map) {
            if(map[elem] % 2 !== 0) return false;
        }

        return true;
    }
}
