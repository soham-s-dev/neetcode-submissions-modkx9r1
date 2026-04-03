class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxSpeed = piles.reduce((prev, curr) => prev + curr, 0);
        let minSpeed = maxSpeed;
        let l = 1, r = maxSpeed;

        while(l <= r) {
            let mid = Math.floor((l + r) / 2);
            let totalHours = 0;
            for(let i = 0; i < piles.length; i++) {
                totalHours += Math.ceil(piles[i]/ mid);
            }

            if(totalHours <= h) {
                minSpeed = mid;
                r = mid - 1;
            } else 
                l = mid + 1;
        }
        return minSpeed;
    }
}
