class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let modifiedStr = s.replace(/[?!,.:;@#$%^&* ']/gi, "").toLowerCase();
        console.log(modifiedStr);
        let l = 0, r = modifiedStr.length - 1;

        while(l < r) {
            if(modifiedStr[l] !== modifiedStr[r]) return false;
            l++; r--;
        }

        return true;
    }
}
