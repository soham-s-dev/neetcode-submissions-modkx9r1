class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let m = board.length, n = board[0].length;
        let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        for(let i = 0; i < n; i++) {
            dfs(0, i);
        }

        for(let i = 0; i < m; i++) {
            dfs(i, 0);
        }

        for(let i = 0; i < n; i++) {
            dfs(m - 1, i);
        }

        for(let i = 0; i < m; i++) {
            dfs(i, n - 1);
        }


        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === 'O') board[i][j] = 'X';
            }
        }

        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(board[i][j] === '#') board[i][j] = 'O';
            }
        }

        function dfs(i, j) {
            if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== 'O') return;

            board[i][j] = '#';

            for(let [x, y] of dirs) {
                dfs(i + x, j + y);
            }
        }
    }
}
