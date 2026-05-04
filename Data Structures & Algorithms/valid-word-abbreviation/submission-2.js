class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0, j = 0;
        let chars = 'abcdefghijklmnopqrstuvwxyz';
        let nums = "0123456789";

        while(j < abbr.length) {
            if(abbr[j] === '0') return false;

            if(chars.includes(abbr[j])) {
                if(abbr[j] !== word[i]) return false;
                i++; j++;
                continue;
            }

            let num = 0;
            while(nums.includes(abbr[j])) {
                num = (10 * num) + parseInt(abbr[j]);
                console.log(num);
                j++;
            }
            
            i += num;
        }

        if(i === word.length) return true;
        return false;
    }
}
