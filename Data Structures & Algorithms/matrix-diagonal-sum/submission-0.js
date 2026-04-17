class Solution {
    /**
     * @param {number[][]} mat
     * @return {number}
     */
    diagonalSum(mat) {
        let sum = 0;

        for(let i = 0, j = 0; i < mat.length, j < mat[0].length; i++, j++) {
            sum += mat[i][j];
        }

        for(let i = 0, j = mat[0].length - 1; i < mat.length, j >= 0; i++, j--) {
            if(i === j) continue;
            sum += mat[i][j];
        }
        return sum;
    }
}
