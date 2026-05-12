class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        let map = {};

        function dfs(i, j) {
            if(i === text1.length || j === text2.length) return 0;

            if(text1[i] === text2[j]) return 1 + dfs(i + 1, j + 1);

            if(map[`${i},${j}`]) return map[`${i},${j}`];

            map[`${i},${j}`] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
            return map[`${i},${j}`];
        }
        return dfs(0, 0);
    }
}
