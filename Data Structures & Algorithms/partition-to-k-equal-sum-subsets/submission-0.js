class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    canPartitionKSubsets(nums, k) {
        let sum = nums.reduce((prev, curr) => prev + curr, 0);
        if(sum % k !== 0) return false;

        let target = sum / k;
        nums.sort((a, b) => b - a);
        let used  = Array(nums.length).fill(false);

        function backTrack(i, k, subsetSum) {
            if(k === 0) return true;

            if(subsetSum === target) 
                return backTrack(0, k - 1, 0);

            for(let j = i; j < nums.length; j++) {
                if(used[j] || subsetSum + nums[j] > target) continue;

                used[j] = true;

                if(backTrack(j + 1, k, subsetSum + nums[j])) return true;

                used[j] = false;
            }
            return false;
        }
        return backTrack(0, k, 0);
    }
}
