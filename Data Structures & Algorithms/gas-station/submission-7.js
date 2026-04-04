class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalGas = gas.reduce((prev, curr) => prev + curr, 0);
        let totalCost = cost.reduce((prev, curr) => prev + curr, 0);

        if(totalCost > totalGas) return -1;

        let res = 0;
        let i = 0, n = gas.length;
        let tank = 0;
        while(i < n) {
            tank += gas[i] - cost[i];

            if(tank < 0) {
                tank = 0;
                res= i + 1;
            }
            i++;
        }
        return res;
    }
}
