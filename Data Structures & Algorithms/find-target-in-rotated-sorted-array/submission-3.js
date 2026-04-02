class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let rotatedIndex = this.findIndex(nums);
    
        let searchLeft = this.binSearch(0, rotatedIndex - 1, nums, target);
        if(searchLeft === -1) return this.binSearch(rotatedIndex, nums.length - 1, nums, target);
        else return searchLeft;
    }

    findIndex(nums) {
        let l = 0, r = nums.length - 1;
        while(l < r) {
            let mid = Math.floor((l + r) / 2);

            if(nums[mid] > nums[r]) l = mid + 1;
            else r = mid;
        }
        return l;
    }


    binSearch(l, r, nums, target) {
        while(l <= r) {
            let mid = Math.floor((l + r) / 2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] > target) r = mid - 1;
            else l = mid + 1;
        }
        return -1;
    }


}
