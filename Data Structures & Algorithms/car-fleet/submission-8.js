class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((elem, index) => [elem, speed[index]])
                            .sort((a, b) => b[0] - a[0]);


        let stack = [];
        let fleet = 0;

        for(let [position, speed] of cars) {
            let time = (target - position) / speed;
            if(stack.length === 0 || time > stack[stack.length - 1]) {
                stack.push(time);
                fleet++;
            }
        }

        return stack.length;
    }
}
