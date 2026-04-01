class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if(hand.length % groupSize !== 0) return false;

        let map = {};
        for(let card of hand) {
            map[card] = (map[card] || 0) + 1;
        }

        hand.sort((a, b) => a - b);

        for(let card of hand) {
            if(map[card] > 0) {
                for(let i = card; i < card + groupSize; i++) {
                    if(!map[i]) return false;
                    map[i]--;
                }
            }
        }
        return true;
    }
}
