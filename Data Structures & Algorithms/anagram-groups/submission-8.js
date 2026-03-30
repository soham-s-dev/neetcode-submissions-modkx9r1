class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let str of strs) {
            let arr = new Array(26).fill(0);
            for(let char of str) {
                arr[char.charCodeAt() - 'a'.charCodeAt()]++;
            }

            let key = arr.join(',');
            if(map[key]) map[key].push(str);
            else map[key] = [str];
        }

        return Object.values(map);
    }
}
