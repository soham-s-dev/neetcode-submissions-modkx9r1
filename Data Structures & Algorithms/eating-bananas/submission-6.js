class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles);

        for(let i = 1; i <= max; i++) {
            let time = 0;
            for(let pile of piles) {
                time += Math.ceil(pile / i);
                if(time > h) break;
            }
            
            if(time <= h) {
                return i;
            }
        }
    }
}
