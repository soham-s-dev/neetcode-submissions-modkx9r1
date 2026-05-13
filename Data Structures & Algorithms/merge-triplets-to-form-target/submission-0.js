class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let ans = new Set();
        for(let i = 0; i < triplets.length; i++) {
            if(triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2])
                continue;

            for(let j = 0; j < triplets[i].length; j++) {
                if(triplets[i][j] === target[j]) ans.add(j);
            }
            
        }
        return ans.size === 3;
    }
}
