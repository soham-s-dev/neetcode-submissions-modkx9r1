class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        let map = {};
        let largest = 0;

        for(let elem of arr) 
            map[elem] = (map[elem] || 0) + 1;

        for(let key in map) {
            if(map[key] === parseInt(key)) largest = Math.max(largest, key);
        }
        console.log(map);
           
        return largest === 0 ? -1 : largest;
    }
}
