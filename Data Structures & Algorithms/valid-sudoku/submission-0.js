class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let m = board.length, n = board[0].length;
        let rowMap = new Map();
        let colMap = new Map();
        let squareMap = new Map();

        for(let r = 0; r < m; r++) {
            for(let c = 0; c < n; c++) {
                let squareKey = `${Math.floor(r / 3)}, ${Math.floor(c / 3)}`;

                if(board[r][c] === ".") continue;

                if((rowMap.get(r) && rowMap.get(r).has(board[r][c])) || 
                    (colMap.get(c) && colMap.get(c).has(board[r][c])) ||
                    (squareMap.get(squareKey) && squareMap.get(squareKey).has(board[r][c])
                )) return false;


                if(!rowMap.has(r)) rowMap.set(r, new Set());
                if(!colMap.has(c)) colMap.set(c, new Set());
                if(!squareMap.has(squareKey)) squareMap.set(squareKey, new Set());

                rowMap.get(r).add(board[r][c]);
                colMap.get(c).add(board[r][c]);
                squareMap.get(squareKey).add(board[r][c]);
            }
        }
        return true;
    }
}
