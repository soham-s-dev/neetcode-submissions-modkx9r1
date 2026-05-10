class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        let maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
        let minHeap = new PriorityQueue((a, b) => a[0] - b[0]);
        let res = 0;
        let l = 0;

        for(let r = 0; r < nums.length; r++) {
            let num = nums[r];
            maxHeap.push([num, r]);
            minHeap.push([num, r]);

            while(maxHeap.front()[0] - minHeap.front()[0] > limit) {
                l++;
                while(!maxHeap.isEmpty() && maxHeap.front()[1] < l) maxHeap.pop();
                while(!minHeap.isEmpty() && minHeap.front()[1] < l) minHeap.pop();
            }

            res = Math.max(r - l + 1, res);
        }
        return res;
    }
}
