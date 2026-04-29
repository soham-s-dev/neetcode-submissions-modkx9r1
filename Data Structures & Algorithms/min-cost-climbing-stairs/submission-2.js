class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let map = {};
        return Math.min(findCost(0), findCost(1));

        function findCost(i) {
            if(i >= cost.length) return 0;

            if(map[i]) return map[i];

            map[i] = Math.min(findCost(i + 1) + cost[i], findCost(i + 2) + cost[i])

            return map[i];
        }
    }
}
