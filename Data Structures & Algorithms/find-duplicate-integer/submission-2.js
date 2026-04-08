class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
       let l = 1, r = nums.length - 1;

       while(l < r) {
        let mid = Math.floor((l + r) / 2);

        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] <= mid) count++;
        }

        if(count > mid) r = mid;
        else l = mid + 1;
       }
       return l;
    }
}
