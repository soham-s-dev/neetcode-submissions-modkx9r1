class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let cpx = strs[0];

        for(let i = 1; i < strs.length; i++) {
            while(!strs[i].startsWith(cpx)) {
                cpx = cpx.slice(0, -1);
                if(cpx === "") return "";
            }
        }
        return cpx;
    }
}
