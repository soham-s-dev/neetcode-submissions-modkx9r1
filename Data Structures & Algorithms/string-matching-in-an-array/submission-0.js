class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let arr = words.sort((a, b) => b.length - a.length);
        let s = "";
        let ans = [];
        console.log(arr);
        for(let word of words) {
            if(s.includes(word)) ans.push(word);
            else s += word;
        }
        console.log(ans);
        return ans;
    }
}
