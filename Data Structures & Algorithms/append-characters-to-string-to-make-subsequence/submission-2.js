class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        if(t === "") return 0;

        let i = 0, j = 0;

        while(i < t.length) {
            if(s[j] === t[i]) {
                i++;
            }
            if(j >= s.length) break;

            j++;
        }

        return t.length - i;
    }
}
