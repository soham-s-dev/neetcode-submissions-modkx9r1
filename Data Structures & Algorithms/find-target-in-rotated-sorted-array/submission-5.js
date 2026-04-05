class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = this.findIndex(nums);
        console.log(pivot);
        let searchFirst = this.binSearch(nums, target, 0, pivot - 1);
        return searchFirst !== -1 ? searchFirst : this.binSearch(nums, target, pivot, nums.length - 1);
    }

    findIndex(nums) {
        let l = 0, r = nums.length - 1;
        while(l < r) {
            let mid = Math.floor((r + l) / 2);
            if(nums[mid] > nums[r]) {
                l = mid + 1;
            } else r = mid;
        }
        return l;
    }

    binSearch(nums, target, l, r) {
        while(l <= r) {
            let mid = Math.floor((l + r) / 2);

            if(nums[mid] === target) return mid;
            else if(nums[mid] > target) r = mid - 1;
            else l = mid + 1;
        }
        return -1;
    }
}
