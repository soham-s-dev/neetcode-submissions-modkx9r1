class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]];
        let m = board.length, n = board[0].length;
        for(let i = 0; i < m; i++) {
            for(let j = 0; j < n; j++) {
                if(backTrack(i, j, 0)) return true;
            }
        }
        return false;


        function backTrack(i, j, k) {
            if(k === word.length) return true;

            if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;

            let temp = board[i][j];
            board[i][j] = '#';

            for(let [x, y] of dirs) {
                if(backTrack(i + x, j + y, k + 1)) return true;
            } 

            board[i][j] = temp;
            return false;
        }


    }
}
