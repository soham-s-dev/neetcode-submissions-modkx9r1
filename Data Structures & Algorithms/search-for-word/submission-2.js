class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let k = 0;
        let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++)
                if(backTrack(i, j, 0)) return true;
        }
        return false;


        function backTrack(i, j, k) {
            if(k === word.length) return true;

            if(i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;

            if(word[k] !== board[i][j]) return false;

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
