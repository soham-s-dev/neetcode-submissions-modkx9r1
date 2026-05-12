class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        let map = {};
        
        function dfs(i, j) {
            if(i > j) return 0;

            if(i === j) return 1;

            if(s[i] === s[j]) {
                return 2 + dfs(i + 1, j - 1);
            }

            if(map[`${i}, ${j}`]) return map[`${i}, ${j}`];

            map[`${i}, ${j}`] = Math.max(dfs(i + 1, j), dfs(i, j - 1));
            return map[`${i}, ${j}`];
        }

        return dfs(0, s.length - 1);
    }
}
