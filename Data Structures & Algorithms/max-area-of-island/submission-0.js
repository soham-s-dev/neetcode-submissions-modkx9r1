class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0, m = grid.length, n = grid[0].length;
        for(let i = 0; i < m; i++) {
            let islandArea = 0;
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 1) {
                    grid[i][j] = 0;
                    maxArea = Math.max(maxArea, 1 + this.bfs(grid, m, n, [i, j]));
                }
            }
        }
        return maxArea;
    }


    bfs(grid, m, n, indices) {
        let queue = [indices];
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        let size = 0;

        while(queue.length) {
            let [idx, idy] = queue.shift();

            for(let [x, y] of directions) {
                let r = idx + x;
                let c = idy + y;

                if(r < 0 || r >= m || c < 0 || c >= n) continue;

                if(grid[r][c] === 1) {
                    size++;
                    grid[r][c] = 0;
                    queue.push([r, c]);
                }
            }
        }
        return size;
    }
}
