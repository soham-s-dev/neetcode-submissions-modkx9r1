class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        let stack = [];
        for(let a of asteroids) {
            let alive = true;

            while(alive && stack.length && stack[stack.length - 1] > 0 && a < 0) {
                if(Math.abs(a) === Math.abs(stack[stack.length - 1])) {
                    stack.pop();
                    alive = false;
                } else if(Math.abs(a) > Math.abs(stack[stack.length - 1])) {
                    stack.pop();
                } else {
                    alive = false;
                }
            }

            if(alive) stack.push(a);
        }
        return stack;
    }
}
