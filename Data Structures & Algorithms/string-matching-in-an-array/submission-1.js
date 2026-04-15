class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        words.sort((a, b) => b.length - a.length);
        let s = "";
        let ans = [];
        for(let word of words) {
            if(s.includes(word)) ans.push(word);
            else s += word;
        }
        return ans;
    }
}
