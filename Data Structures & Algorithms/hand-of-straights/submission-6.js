class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        let map = {};

        for(let i = 0; i < hand.length; i++) {
            map[hand[i]] = (map[hand[i]] || 0) + 1;
        }

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
