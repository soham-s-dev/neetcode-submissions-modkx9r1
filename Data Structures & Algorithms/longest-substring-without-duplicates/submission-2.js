class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let l = 0, r = 0;
        let len = 0;

        while(r < s.length) {
            
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }

           set.add(s[r]);
           len = Math.max(len, r - l + 1);
           r++;
        }
        return len;
    }
}
