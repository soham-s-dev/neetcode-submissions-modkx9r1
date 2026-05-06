class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let n = gas.length;

        for(let i = 0; i < gas.length; i++) {
            let tank = gas[i] - cost[i];

            if(tank < 0) continue;

            let j = (i + 1) % n;

            while(true) {
                tank += gas[j] - cost[j];
                if(tank < 0) break;
                if(i === j) return i;
                j = (j + 1) % n;
           }
        }
        return -1;
    }
}
