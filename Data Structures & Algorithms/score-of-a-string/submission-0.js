class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let l = 0, r = l + 1;
        let score = 0;

        while(r < s.length) {
            score += Math.abs(s[r].charCodeAt(0) - s[l].charCodeAt());
            l = r;
            r = l + 1;
        }

        return score;
    }
}
