class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let levelDeep = [];

        for(let log of logs) {
            switch(log) {
                case '../': 
                    levelDeep.length > 0 && levelDeep.pop();
                    break;
                case './': 
                    //noop
                    break;
                default: 
                    levelDeep.push(log);
                    break;
            }
        }

        return levelDeep.length;
    }
}
