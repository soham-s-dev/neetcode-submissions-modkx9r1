class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let str of strs) {
            let key = str.split('').sort().join('');

            if(map[key]) {
                let anagrams = map[key];
                anagrams.push(str);
                map[key] = anagrams;
            } else {
                map[key] = [str];
            }
        }

        return Object.values(map);
    }
}
