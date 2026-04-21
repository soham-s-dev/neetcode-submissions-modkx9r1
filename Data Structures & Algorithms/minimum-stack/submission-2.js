class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(!this.stack.length) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if(val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if(!this.stack.length) return;

        let pop = this.stack.pop();

        if(pop < 0) this.min -= pop
    }

    /**
     * @return {number}
     */
    top() {
        let top = this.stack[this.stack.length - 1];

        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
