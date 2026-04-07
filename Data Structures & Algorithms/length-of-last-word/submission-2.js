class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let arr = [];
        
        let i = s.length - 1, j = s.length - 1;

        while(i >= 0) {
            if(s[i] === " " && i === j) {
                i--; j--;
            } else if(s[i] === " " && i !== j) {
                break;
            } else {
                arr.unshift(s[i]);
                i--;
            }
        }
        console.log(arr);
        return arr.length;
    }

}
