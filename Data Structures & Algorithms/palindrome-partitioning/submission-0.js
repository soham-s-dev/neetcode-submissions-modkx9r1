class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        let res = [];

        function isPalindrome(str, l, r) {
            while(l < r) {
                if(str[l] !== str[r]) return false;
                l++; r--;
            }
            return true;
        }


        function backTrack(i, curr) {
            if(i === s.length) {
                res.push([...curr]);
                return;
            } 


            for(let j = i; j < s.length; j++) {
                if(isPalindrome(s, i, j)) {
                    curr.push(s.slice(i, j + 1));
                    backTrack(j + 1, curr);
                    curr.pop();
                }
            }
        }
        backTrack(0, []);
        return res;
    }
}
