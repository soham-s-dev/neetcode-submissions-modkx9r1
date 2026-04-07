class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let sum = piles.reduce((prev, curr) => prev + curr, 0);

        let l = 1, r = sum;

        while(l <= r) {
            let mid = Math.floor((l + r) / 2);

            let eatingHours = 0;
            for(let i = 0; i < piles.length; i++) {
                eatingHours += Math.ceil(piles[i] / mid);
            }
            if(eatingHours > h) {
                l = mid + 1;
            } else r = mid - 1;
        }
        return l;
    }
}
