class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let maxLen = "";
        for(let i = 0; i < s.length; i++) {
            let l = i, r = i;

            while(l >= 0 && r < s.length && s[r] === s[l]) {
                maxLen = maxLen.length < r - l + 1 ? s.substring(l, r + 1) : maxLen;
                l--; r++;
            }

            l = i, r = i + 1;
            while(l >= 0 && r < s.length && s[r] === s[l]) {
                maxLen = maxLen.length < r - l + 1 ? s.substring(l, r + 1) : maxLen;
                l--; r++;
            }

        }
        return maxLen;
        
    }
}
