class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let m = heights.length, n = heights[0].length;

        let pacific = Array.from({length: m}, () => new Array(n).fill(false));
        let atlantic = Array.from({length: m}, () => new Array(n).fill(false));
        let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        let res = [];

        function dfs(i, j, visited) {
            visited[i][j] = true;

            for(let [x, y] of dirs) {
                let r = i + x;
                let c = j + y;

                if(r < 0 || r >= m || c < 0 || c >= n || visited[r][c] || heights[r][c] < heights[i][j]) continue;

                dfs(r, c, visited);
            }
        }

        for(let i = 0; i < m; i++) {
            dfs(i, 0, pacific);
        }

        for(let i = 0; i < n; i++) {
            dfs(0, i, pacific);
        }

        for(let i = 0; i < m; i++) {
            dfs(i, n - 1, atlantic);
        }

        for(let i = 0; i < n; i++) {
            dfs(m - 1, i, atlantic);
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(atlantic[i][j] && pacific[i][j]) {
                    res.push([i, j]);
                }
            }
        }
        return res;
    }
}
