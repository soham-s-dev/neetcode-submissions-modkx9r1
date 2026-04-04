class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let ans = 0;
        let stack = [];

        for(let token of tokens) {
            if(['+', '-', '/', '*'].includes(token)) {
                let op2 = stack.pop();
                let op1 = stack.pop();
                let res = 0;
                switch(token) {
                    case '+': 
                        res = op1 + op2;
                        break;
                    case '-': 
                        res = op1 - op2;
                        break;
                    case '*': 
                        res = op1 * op2;
                        break;
                    case '/': 
                        res = Math.trunc(op1 / op2);
                        break;
                }
                stack.push(res);
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop();

    }
}
