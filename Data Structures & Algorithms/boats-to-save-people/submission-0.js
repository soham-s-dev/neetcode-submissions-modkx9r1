class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        let l = 0, r = people.length - 1;
        let count = 0;

        while(l <= r) {
            let capacity = limit - people[r];
            r--; count++;
            if(capacity >= people[l]) l++;
        }
        return count;
    }
}
