class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for(let i = 0; i < nums.length; i++) {
           let len = 0;
           let curr = nums[i];

           while(set.has(curr)) {
                curr++;
                len++;
           }

           longest = Math.max(len, longest);
        }
        return longest;
    }
}
