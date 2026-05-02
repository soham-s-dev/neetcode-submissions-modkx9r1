class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);
        
        let l = 0, r = people.length - 1;
        let boatsCount = 0;

        while(l <= r) {
            let weight = people[l] + people[r]; 

            if(weight <= limit) {
                boatsCount++;
                l++; r--;
            } else {
                boatsCount++;
                r--;
            }
        }
        return boatsCount;
    }
}

[1,2,2,3,3]

