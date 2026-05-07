class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let l = s.length - 1, r = s.length - 1;

        while(l >= 0) {
            if(s[l] === " " && l === r) {
                l--; r--;
            } else if(s[l] === " " && l !== r) {
                break;
            } else l--;
        }
        return r - l;
    }
}
