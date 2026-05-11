class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];

        candidates.sort((a, b) => a - b);

        function backTrack(i, curr, sum) {
            if(sum === target) { 
                res.push([...curr]);
                return;
            }

            if(sum > target) return;

            for(let j = i; j < candidates.length; j++) {
                if(j > i && candidates[j - 1] === candidates[j]) continue;
                curr.push(candidates[j]);
                backTrack(j + 1, curr, sum + candidates[j]);
                curr.pop();
            }
        }

        backTrack(0, [], 0);
        return res;
    }
}
