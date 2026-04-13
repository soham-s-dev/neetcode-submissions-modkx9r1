class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let l = 0, r = l + k - 1;
        let minOps = Infinity;
        while(r < blocks.length) {
            let ops = 0;
            for(let i = l; i <= r; i++) {
                if(blocks[i] === "W") ops++;
            }
            minOps = Math.min(minOps, ops);
            l++, r++;
        }
        return minOps;
    }
}
