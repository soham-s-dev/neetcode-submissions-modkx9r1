class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let longest = 0;

        let l = 0, r = 0;
        while(r < s.length) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

            set.add(s[r]);
            longest = Math.max(r - l + 1, longest);
            r++;
        }
        return longest;
    }
}
