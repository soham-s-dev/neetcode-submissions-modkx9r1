class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let arr = new Array(26).fill(0);

        for(let i = 0; i < s.length; i++) {
            let index = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index]++;
        }

        let maxOdd = 0, minEven = Infinity;

        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > maxOdd && arr[i] % 2 !== 0) maxOdd = arr[i];
            if(arr[i] < minEven && arr[i] % 2 === 0 && arr[i] !== 0) minEven = arr[i];
        }
        console.log(maxOdd, minEven,arr);
        return maxOdd - minEven;
    }
}
