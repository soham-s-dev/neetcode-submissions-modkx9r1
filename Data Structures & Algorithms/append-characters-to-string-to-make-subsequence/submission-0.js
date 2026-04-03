class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0, j = 0;
        let len = t.length;

        while(i < s.length) {
            if(s[i] === t[j]) {
                len--;
                j++;
            } 
            i++;
        }

        return len;
    }
}
