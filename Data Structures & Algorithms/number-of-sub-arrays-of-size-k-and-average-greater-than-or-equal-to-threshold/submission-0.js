class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0, r = l + k;
        let count = 0;

        while(r <= arr.length) {
            let sum = 0;
            for(let i = l; i < r; i++) {
                sum += arr[i];
            }
            console.log(sum);
            let average = sum / k;
            if(average >= threshold) count++;
            l++; r++;
        }
        return count;
    }
}
