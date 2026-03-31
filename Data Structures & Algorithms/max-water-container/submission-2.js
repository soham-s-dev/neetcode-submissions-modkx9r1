class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let l = 0, r = heights.length - 1;

        while(l < r) {
            let storedWater = (r - l) * Math.min(heights[l], heights[r]);

            maxWater = Math.max(storedWater, maxWater);

            if(heights[l] > heights[r]) r--;
            else l++;
        }
        return maxWater;
    }
}
