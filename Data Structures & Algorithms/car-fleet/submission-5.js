class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((elem, index) => [elem, speed[index]])
                            .sort((a,b) => b[0] - a[0]);

        let stack = [];
        let fleets = 0;

        for(let car of cars) {
            let travelingHours = (target - car[0]) / car[1];

            if(stack.length === 0 || travelingHours > stack[stack.length - 1]) {
                stack.push(travelingHours);
                fleets++;
            }
        }
        return fleets;
    }
}
// 7,1 4,2 1,2 0,1
