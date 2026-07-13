class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m = board.length, n = board[0].length;
        for(let i = 0; i < m; i++) {
            let set = new Set();
            for(let j = 0; j < n; j++) {
                 if (board[i][j] === '.') continue;
                if(set.has(board[i][j])) return false;
                set.add(board[i][j]);
            }
        }

        for(let i = 0; i < m; i++) {
            let set = new Set();
            for(let j = 0; j < n; j++) {
                 if (board[j][i] === '.') continue;
                if(set.has(board[j][i])) return false;
                set.add(board[j][i]);
            }
        }

        for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {

        let set = new Set();

        for (let i = row; i < row + 3; i++) {
            for (let j = col; j < col + 3; j++) {

                if (board[i][j] === '.') continue;

                if (set.has(board[i][j]))
                    return false;

                set.add(board[i][j]);
            }
        }
    }
}
    return true;
    }
}
