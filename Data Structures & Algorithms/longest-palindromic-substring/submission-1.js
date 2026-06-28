class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let start = 0;
        let longest = 0;

        for(let i = 0; i < s.length; i++) {
            let l = i, r = i;
            while(l >= 0 && r < s.length) {
                if(s[l] !== s[r]) {
                    break;
                }
                l--; r++;
            }
            if(r - l - 1 > longest) { 
                start = l + 1;
                longest = r - l - 1;
            }
        }
        console.log(longest);

        for(let i = 0; i < s.length; i++) {
            let l = i, r = i + 1;
            while(l >= 0 && r < s.length) {
                if(s[l] !== s[r]) {
                    break;
                }
                l--; r++;
            }
            if(r - l - 1 > longest) { 
                start = l + 1;
                longest = r - l - 1;
            }
        }

        return s.substr(start, longest);
    }
}
