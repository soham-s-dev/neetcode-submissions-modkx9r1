class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let m = matrix.length;
        for(let i = 0; i < m; i++) {
            let l = 0, r = matrix[i].length - 1;
            while(l <= r) {
                let mid = Math.floor((l + r) / 2);
                if(matrix[i][mid] === target) return true;
                else if(matrix[i][mid] > target) r = mid - 1;
                else l = mid + 1;
            }
        }
        return false;
    }
}
