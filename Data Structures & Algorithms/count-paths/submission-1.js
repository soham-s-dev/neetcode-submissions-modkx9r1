class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        let res = 0;
        let map = {};

        function trace(i, j) {
            if(i >= m || j>= n) return 0;

            if(i === m - 1 && j === n - 1) {
                return 1;
            }

            if(map[`${i},${j}`]) return map[`${i},${j}`];

            map[`${i},${j}`] = trace(i + 1, j) + trace(i, j + 1);
            return map[`${i},${j}`];
        }

        res = trace(0, 0);
        return res;

    }
}
