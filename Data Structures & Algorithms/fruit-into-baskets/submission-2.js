class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let maxFruits = 0;
        let map = new Map();

        for(let l = 0, r = 0; r < fruits.length; r++) {
            map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

            while(map.size > 2) {
                map.set(fruits[l], map.get(fruits[l]) - 1);

                if(map.get(fruits[l]) === 0) map.delete(fruits[l]);
                l++;
            }

            maxFruits = Math.max(maxFruits, r - l + 1);
        }
        return maxFruits;
    }
}
