class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        function binarySearch(target) {
            let l = 0, r = nums.length;
            while(l < r) {
                let mid = Math.floor((l + r) / 2);
                if(nums[mid] >= target) r = mid;
                else l = mid + 1; 
            }
            return l;
        }
        let start = binarySearch(target);
        if(start === nums.length || nums[start] !== target) return [-1, -1];

        return [start, binarySearch(target + 1) - 1];
    }

}
