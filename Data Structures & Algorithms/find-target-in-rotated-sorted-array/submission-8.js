class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let pivot = this.findPivot(nums, 0, nums.length - 1);
        console.log(pivot);
        let firstSearch = this.findElement(nums, 0, pivot - 1, target);
        return firstSearch !== -1 ? firstSearch: this.findElement(nums, pivot, nums.length - 1, target);
    }

    findPivot(nums, l, r) {
        while(l < r) {
            let mid = Math.floor((l + r) / 2);
            if(nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }
        return l;
    }

    findElement(nums, l, r, target) {
        while(l <= r) {
            let mid = Math.floor((l + r) / 2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] > target) r = mid - 1;
            else l = mid + 1;
        }
        return -1;
    }

}
