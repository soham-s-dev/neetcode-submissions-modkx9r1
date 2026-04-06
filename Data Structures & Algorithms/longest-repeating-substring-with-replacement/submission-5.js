class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0, maxFreq = 0;
        let map = {};

        let l = 0, r = 0;

        while(r < s.length) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxFreq = Math.max(maxFreq, map[s[r]]);


            let windowLen = r - l + 1;
            if(windowLen - maxFreq > k) {
                map[s[l]] -= 1;
                l++;
            } else
                longest = Math.max(longest, r - l + 1);
                r++;
        }
        return longest;
    }
}
