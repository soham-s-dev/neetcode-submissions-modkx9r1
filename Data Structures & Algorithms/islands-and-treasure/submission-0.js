class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        let m = grid.length, n = grid[0].length;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 0) {
                    this.bfs(grid, m , n, [i, j]);
                }
            }
        }
    }


    bfs(grid, m, n, indices) {
        let queue = [indices];
        let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        let distance = 1;
        while(queue.length > 0) {
            let len = queue.length;
            for(let i = 0; i < len; i++) {
                let [idx, idy] = queue.shift();

                for(let [x, y] of directions) {
                    let r = idx + x;
                    let c = idy + y;

                    if(r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === -1 || grid[r][c] === 0)
                        continue;

                    if(grid[r][c] <= distance) continue;

                    grid[r][c] = distance;
                    queue.push([r, c]);
                }
            }
            distance++;
        }

    }
}
