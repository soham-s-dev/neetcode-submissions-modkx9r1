class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivotIndex = findPivot(0, nums.length - 1);
        let first = binSearch(0, pivotIndex - 1);
        let second = binSearch(pivotIndex, nums.length - 1);
        return first !== -1 ? first : second !== -1 ? second : -1;


        function findPivot(l, r) {
            while(l < r) {
                let mid = Math.floor((l + r) / 2);

                if(nums[r] < nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }
            return l;
        }

        function binSearch(l, r) {
            while(l <= r) {
                let mid = Math.floor((l + r) / 2);
                if(nums[mid] === target) return mid;
                else if(nums[mid] > target) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
            return -1;
        }
    }
}
