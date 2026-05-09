class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        let maxFruit = 0;
        let map = new Map();

        let l = 0, r = 0;
        while(r < fruits.length) {
            map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);

            while(map.size > 2) {
                map.set(fruits[l], map.get(fruits[l]) - 1);
                if(map.get(fruits[l]) === 0) map.delete(fruits[l]);
                l++;
            }

            maxFruit = Math.max(r - l + 1, maxFruit);
            r++;
        }
        return maxFruit;
    }
}

