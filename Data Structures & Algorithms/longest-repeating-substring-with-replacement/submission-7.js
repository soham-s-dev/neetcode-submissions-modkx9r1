class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let maxFreq = 0, maxLen = 0;
        let l = 0, r = 0;

        while(r < s.length) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[r]]);

            let windowLen = r - l + 1;
            if(windowLen - maxFreq > k) {
                map[s[l]] -= 1;
                l++;
            } else {
                maxLen = Math.max(maxLen, r - l + 1);
            }
            r++;
        }
        return maxLen;
    }
}
