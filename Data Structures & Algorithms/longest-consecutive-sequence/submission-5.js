class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        let set = new Set(nums);

        for(let i = 0; i < nums.length; i++) {
            let curr = nums[i];
            let len = 0;

            while(set.has(curr)) {
                curr++;
                len++;
            }

            longest = Math.max(len, longest);
        }
        return longest;
    }
}
