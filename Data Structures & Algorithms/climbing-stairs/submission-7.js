class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        let map = {};

        function climb(i) {
            if(i < 0) return 0;

            if(i === 0) return 1;

            if(map[i]) return map[i];

            map[i] = climb(i - 1) + climb(i - 2);

            return map[i];
        }
        return climb(n);
    }
}
