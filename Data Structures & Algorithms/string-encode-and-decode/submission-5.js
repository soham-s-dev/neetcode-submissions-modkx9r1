class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "";
        let encodedString = "";
        let freq = [];

        for(let str of strs) {
           freq.push(str.length);
        }

        encodedString = freq.join(',') + '#' + strs.join('');
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length === 0) return [];
        let lengths = "";
        let i = 0;

        while(str[i] !== '#') {
            lengths += str[i];
            i++;
        }

        lengths = lengths.split(',');
        console.log(lengths);
        i = i + 1;

        let res = [];
        for(let len of lengths) {
            let s = str.substring(i, i + parseInt(len));
            res.push(s);
            i = i + parseInt(len);
        }
        return res;
    }
}
