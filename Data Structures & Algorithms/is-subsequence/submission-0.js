class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0, j = 0;

        if(s.length > t.length) return false;

        while(i < t.length) {
            if(s[j] === t[i]) j++;
            i++;
        }

        if(j === s.length) return true;
        return false;
    }
}
