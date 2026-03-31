class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let n = gas.length;
        let totalGas = gas.reduce((prev, curr) => prev + curr, 0);
        let totalCost = cost.reduce((prev, curr) => prev + curr, 0);

        if(totalGas < totalCost) return -1;

        let tank = 0;
        let res = 0;

        for(let i = 0; i < n; i++) {
            tank += gas[i] - cost[i];

            if(tank < 0) {
                tank = 0;
                res = i + 1;
            }
        }   
        return res;
    }
}
