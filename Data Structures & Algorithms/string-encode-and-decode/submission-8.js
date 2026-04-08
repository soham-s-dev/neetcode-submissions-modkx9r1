class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(let str of strs) {
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let ans = [];
        while(i < str.length) {
            let len = 0;
            while(str[i] !== "#") {
                len = (len * 10) + parseInt(str[i]);
                i++;
            }

            i = i + 1;
            let s = str.substring(i, i + len);
            ans.push(s);
            i = i + len;
        }
        return ans;
    }
}
