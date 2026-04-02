class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let islands = 0, m = grid.length, n = grid[0].length;

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === "1") {
                    islands++;
                    grid[i][j] = "0";
                    this.bfs(grid, m, n, [i, j]);
                }
            }
        }

        return islands;
    }

    bfs(grid, m, n, indices) {
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let queue = [indices];
        let head = 0;

        while(head < queue.length) {
            let [idx, idy] = queue[head++];

            for(let [x, y] of directions) {
                let r = idx + x;
                let c = idy + y;

                if(r < 0 || r >= m || c < 0 || c >= n) continue;
                if(grid[r][c] === "1") {
                    grid[r][c] = "0";
                    queue.push([r, c]);
                }
            }
        }


    }
}
