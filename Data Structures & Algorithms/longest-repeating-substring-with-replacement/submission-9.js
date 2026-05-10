class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let maxF = 0, longest = 0;

        let l = 0, r = 0;

        while(r < s.length) {
            map[s[r]] = (map[s[r]] || 0) + 1;
            maxF = Math.max(maxF, map[s[r]]);

            let windowLen = r - l + 1;

            if(windowLen - maxF > k) {
                map[s[l]] -= 1;
                l++;
            }
            longest = Math.max(r - l + 1, longest);
            r++;
        }
        return longest;
    }
}
