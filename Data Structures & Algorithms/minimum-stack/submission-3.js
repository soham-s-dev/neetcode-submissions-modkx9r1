class MinStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        let currMinVal = this.stack2[this.stack2.length - 1];
        let minVal = Math.min(currMinVal === undefined ? Infinity : currMinVal, val);
        this.stack1.push(val);
        this.stack2.push(minVal);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack2.pop();
        return this.stack1.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack1[this.stack1.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack2[this.stack2.length - 1];
    }
}
