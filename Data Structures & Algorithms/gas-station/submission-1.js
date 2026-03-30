class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */

    // The main crux of greedy is that, mere se pahle ko mere me add 
    // karne ke baad bhi hum aage nahi badh pa rhe, 
    // to mere akele se to hoga hi nahi, skip me, go to one next to me.
    canCompleteCircuit(gas, cost) {
        let totalGas = gas.reduce((prev, curr) => prev + curr, 0);
        let totalCost = cost.reduce((prev, curr) => prev + curr, 0);

        if(totalGas - totalCost < 0) return -1;

        let tank = 0;
        let res = 0;

        for(let i = 0; i < gas.length; i++) {
            tank += gas[i] - cost[i];

            if(tank < 0) {
                tank = 0;
                res = i + 1;
            }
        }
        return res;
    }
}
