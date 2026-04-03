class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedString = "";

        for(let str of strs) {
            encodedString += str.length + '#' + str;
        }
        
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
    
        while(i < str.length) {
            let len = 0;
            while(str[i] !== '#') {
                len = (10 * len) + parseInt(str[i]);
                i++;
            }
            i = i + 1;
            let s = str.substring(i, i + len);
            res.push(s);
            i = i + len;
        }
        return res;
    }
}
