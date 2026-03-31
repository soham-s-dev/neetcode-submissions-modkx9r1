class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let charMap = new Array(26).fill(0);
        let maxFreq = 0;
        let longest = 0;
        let l = 0;

        for(let r = 0; r < s.length; r++) {
            let index = s[r].charCodeAt(0) - 'A'.charCodeAt(0);
            charMap[index]++;
            maxFreq = Math.max(maxFreq, charMap[index]);

            let windowLen = r - l + 1;
            if(windowLen - maxFreq > k) {
                charMap[s[l].charCodeAt(0) - 'A'.charCodeAt(0)]--;
                l++;
            }

            longest = Math.max(longest, r - l + 1);
        }

        return longest;
    }
}
