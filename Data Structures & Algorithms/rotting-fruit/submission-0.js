class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        let fresh = 0, time = 0, m = grid.length, n = grid[0].length;
        let queue = [];
        let directions = [[0, 1], [0, -1], [-1, 0], [1, 0]];

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(grid[i][j] === 1) fresh++;
                else if(grid[i][j] === 2) queue.push([i, j]);
            }
        }


        while(queue.length > 0 && fresh > 0) {
            const length = queue.length;
            for(let i = 0; i < length; i++) {
                let [idx, idy] = queue.shift();

                for(let [x, y] of directions) {
                    let r = idx + x;
                    let c = idy + y;

                    if(r >= 0 && r < m && c >= 0 && c < n) {
                        if(grid[r][c] === 1) {
                            grid[r][c] = 2;
                            queue.push([r, c])
                            fresh--;
                        }
                    }
                }
            }
            time++;
        }

        return fresh === 0 ? time : -1;
    }
}
