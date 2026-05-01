class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let ans = [];
        for(let i = 0; i < nums1.length; i++) {
            let l = 0;
            while(nums2[l] !== nums1[i] && l < nums2.length) l++;

            let greater = -1;
            while(l < nums2.length) {
                if(nums2[l] > nums1[i]) { 
                    greater = nums2[l];
                    break;
                }
                l++;
            }
            ans.push(greater);
        }
        return ans;
    }
}
