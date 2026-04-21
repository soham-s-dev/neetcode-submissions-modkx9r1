class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let q = new MaxQueue();
        for(let stone of stones) q.enqueue(stone);

        while(true) {
            console.log(q.getQueue());
            if(!q.getQueue().length) return 0;

            if(q.getQueue().length === 1) return q.dequeue();

            let stone1 = q.dequeue();
            let stone2 = q.dequeue();

            q.enqueue(stone1 - stone2);
        }
    }
}

 class MaxQueue {
    #queue;
    constructor() {
        this.#queue = [];
    }

    enqueue(elem) {
        this.#queue.push(elem);
        this.#queue.sort((a , b) => b - a);
    }

    dequeue() {
        return this.#queue.shift();
    }

    getQueue() {
        return this.#queue;
    }
 }








