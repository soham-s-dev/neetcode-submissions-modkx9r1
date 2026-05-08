class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        let satisfied = 0, window = 0;
        let l = 0, r = 0;
        let maxSatisfied = 0;

        while(r < customers.length) {
            if(grumpy[r]) {
                window += customers[r];
            } else {
                satisfied += customers[r];
            }

            if(r - l + 1 > minutes) {
                if(grumpy[l]) {
                    window -= customers[l];
                }
                l++;
            }
            maxSatisfied = Math.max(maxSatisfied, window);
            r++;
        }
        return maxSatisfied + satisfied;
    }
}
