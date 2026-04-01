class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);
        let longest = 0;

        for(let num of nums) {
            let len = 0;
            let curr = num;

            while(set.has(curr)) {
                curr++;
                len++;
            }
            longest = Math.max(longest, len);
        }
        return longest;
    }
}
