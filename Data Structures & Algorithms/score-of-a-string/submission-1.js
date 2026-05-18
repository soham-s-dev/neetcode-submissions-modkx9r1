class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let score = 0;
        for(let i = 0; i < s.length - 1; i++) {
            console.log(s.charCodeAt(i));
            score += Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i));
        }
        return score;
    }
}
