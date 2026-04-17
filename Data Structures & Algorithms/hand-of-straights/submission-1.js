class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let map = hand.reduce((prev, curr) => {
            prev[curr] = (prev[curr] || 0) + 1;
            return prev;
        }, {})

     
        hand.sort((a, b) => a - b);

        for(let h of hand) {
           if(map[h] > 0) {
                for(let i = h; i < h + groupSize; i++) {
                    if(!map[i]) return false;
                    map[i]--;
                }
           } 
        }

        return true;
    }
}
