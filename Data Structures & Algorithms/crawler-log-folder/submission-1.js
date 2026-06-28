class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let levelDeep = 0;

        for(let log of logs) {
            switch(log) {
                case '../': 
                    levelDeep -= levelDeep === 0 ? 0 : 1;
                    break;
                case './': 
                    //noop
                    break;
                default: 
                    levelDeep += 1;
                    break;
            }
        }

        return levelDeep;
    }
}
