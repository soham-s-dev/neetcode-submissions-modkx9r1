class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let n = gas.length;
        for(let i = 0; i < n; i++) {
            let tank = gas[i] - cost[i];

            if(tank < 0) continue;

            let j = (i + 1) % n;

            while(j !== i) {
                tank += gas[j] - cost[j];

                if(tank < 0) {
                    tank = 0;
                    break;
                } else
                    j = (j + 1) % n; 

            }
            if(i === j) return i;
        }
        return -1;
    }
}
