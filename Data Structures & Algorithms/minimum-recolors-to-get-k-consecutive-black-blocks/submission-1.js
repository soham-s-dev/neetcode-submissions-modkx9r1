class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let count = 0;
        for(let i = 0; i < k; i++) 
            if(blocks[i] === 'W') count++;

        let res = count;
        for(let i = k; i < blocks.length; i++) {
            if(blocks[i - k] === 'W') count--;
            if(blocks[i] === 'W') count++;
            res = Math.min(count, res);
        }
        return res;
    }
}
