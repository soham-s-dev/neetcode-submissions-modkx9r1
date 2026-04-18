class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let i = s.length - 1, j = s.length - 1;

        while(i >= 0) {
           if(s[i] === " " && i === j) {
                i--; j--;
           } else if(s[i] === " " && i !== j) break;
           else {
            i--;
           }
        }
        return j - i;
    }
}
