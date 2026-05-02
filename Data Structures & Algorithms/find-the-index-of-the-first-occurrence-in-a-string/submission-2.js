class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        let l = 0, r = 0, k = 0;

        while(r < haystack.length) {
            if(haystack[r] !== needle[k]) {
                l += 1;
                r = l;
                k = 0;
            } else {
                r++;k++;
            }

            if(k === needle.length) return l;
        }
        return -1;
    }
}
