class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let res = Infinity;
        let map = {};

        for(let char of text) {
            if("balloon".includes(char)) {
                map[char] = (map[char] || 0) + 1;
            }
        }

        if(Object.keys(map).length < 5) return 0;

        map['l'] = Math.floor(map['l'] / 2);
        map['o'] = Math.floor(map['o'] / 2);

        
        return Math.min(...Object.values(map));
    }
}
