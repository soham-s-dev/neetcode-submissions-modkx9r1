class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(t) {
        let stack = [];
        let result = new Array(t.length).fill(0);

        for(let i = 0; i < t.length; i++) {
           while(stack[stack.length - 1] && stack[stack.length - 1][0] < t[i]) {
                let [elem, index] = stack.pop();
                let diff = i - index;
                result[index] = diff;
           }
           stack.push([t[i], i]);
           console.log(stack);
        }
        return result;
    }
}
