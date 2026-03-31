class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens) {
            console.log(stack);
            if(["*", "+", "-", "/"].includes(token)) {
                let res = 0;
                let op2 = stack.pop();
                let op1 = stack.pop();
                switch(token) {
                    case "+": 
                        res = op1 + op2;
                        stack.push(res);
                        break; 
                    case "-": 
                        res = op1 - op2;
                        stack.push(res);
                        break;
                    case "*": 
                        res = op1 * op2;
                        stack.push(res);
                        break;
                    case "/": 
                        res = Math.trunc(op1 / op2);
                        stack.push(res);
                        break;
                }
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop();
    }
}
