class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        let freqMap = new Array(26).fill(0);

        for(let char of s1) {
            let idx = char.charCodeAt(0) - 'a'.charCodeAt(0);
            freqMap[idx]++;
        }

        let l = 0, r = s1.length - 1;
        while(r < s2.length) {
            let freqMap1 = new Array(26).fill(0);
            for(let i = l; i <= r; i++) {
                let index = s2[i].charCodeAt(0) - 'a'.charCodeAt(0);
                freqMap1[index]++;
            }

            console.log(freqMap1, freqMap);
            if(freqMap1.join(',') !== freqMap.join(',')) {
                l++; r++;
            } else 
                return true;
        }
        return false;
    }
}
