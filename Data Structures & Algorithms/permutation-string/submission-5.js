class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false;

        let freqMap1 = new Array(26).fill(0);

        for(let char of s1) {
            freqMap1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        let l = 0, r = s1.length - 1;
        while(r < s2.length) {
            let freqMap = new Array(26).fill(0);

            for(let i = l; i <= r; i++) {
                freqMap[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            if(freqMap.join(',') === freqMap1.join(',')) return true;
            l++, r++;
        }
        return false;
    }
}
