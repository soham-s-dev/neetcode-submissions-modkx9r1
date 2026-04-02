class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(s) {
        let map = {};

        for(let i = 0; i < s.length; i++) {
            for(let j = s.length - 1; j >= i; j--) {
                if(s[i] === s[j]) {
                    map[s[i]] = j;
                }
            }
        }

        let res = [];
        let size = 0, end = 0;

        for(let i = 0; i < s.length; i++) {
            size += 1;
            end = Math.max(end, map[s[i]]);

            if(end === i) {
                res.push(size);
                size = 0;
            }
        }

        return res;
    }
}
