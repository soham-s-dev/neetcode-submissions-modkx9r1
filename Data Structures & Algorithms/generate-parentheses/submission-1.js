class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        let res = [];

        function backTrack(open, close, s) {
            if(close === n && open === n) {
                res.push(s);
                return;
            }

            if(open < n) {
                backTrack(open + 1, close, s + '(');
            }

            if(close < open) {
                backTrack(open, close + 1, s + ')');
            }
        }

        backTrack(0, 0, "");
        return res;
    }
}
