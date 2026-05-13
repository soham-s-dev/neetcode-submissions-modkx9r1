class Solution {
    /**
     * @param {number[][]} triplets
     * @param {number[]} target
     * @return {boolean}
     */
    mergeTriplets(triplets, target) {
        let ans = [];
        for(let i = 0; i < triplets.length; i++) {
            if(triplets[i][0] > target[0] || triplets[i][1] > target[1] || triplets[i][2] > target[2])
                continue;

           ans.push([...triplets[i]]);
            
        }
        
        for(let i = 0; i < ans.length - 1; i++) {
            let j = i + 1;
            ans[j][0] = Math.max(ans[i][0], ans[j][0]);
            ans[j][1] = Math.max(ans[i][1], ans[j][1]);
            ans[j][2] = Math.max(ans[i][2], ans[j][2]);
        }

        let n = ans.length - 1;
        if(n < 0) return false;
        
        return ans[n][0] === target[0] && ans[n][1] === target[1] && ans[n][2] === target[2];

    }
}
