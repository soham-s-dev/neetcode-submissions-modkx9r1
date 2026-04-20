class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [];

        function backTrack(i, curr) {
            if(curr.length === k) {
                res.push([...curr]);
                return;
            }

            for(let j = i; j <= n; j++) {
                curr.push(j);
                backTrack(j + 1, curr);
                curr.pop();
            }
        }

        backTrack(1, []);
        return res;
    }
}
