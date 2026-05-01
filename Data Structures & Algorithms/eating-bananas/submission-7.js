class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
       let l = 0, r = Math.max(...piles);

       while(l < r) {
        let mid = Math.floor((l + r) / 2);
        let time = 0;
        for(let pile of piles) {
            time += Math.ceil(pile / mid);
        }

        if(time > h) {
            l = mid + 1;
        } else {
            r = mid;
        }
       }
       return l;
    }
}
