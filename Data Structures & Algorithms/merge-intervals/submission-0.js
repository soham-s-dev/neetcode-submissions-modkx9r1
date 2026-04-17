class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let ans = [];

        intervals.sort((a, b) => a[0] - b[0]);

        ans.push(intervals[0]);

        for(let i = 1; i < intervals.length; i++) {
            let [start, end] = intervals[i];

            if(start > ans[ans.length - 1][1]) ans.push(intervals[i]);
            else {
                ans[ans.length - 1][1] = Math.max(end, ans[ans.length - 1][1]);
            }
        }
        return ans;
    }
}
