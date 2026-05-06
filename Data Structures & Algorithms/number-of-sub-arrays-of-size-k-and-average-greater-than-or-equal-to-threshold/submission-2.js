class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let l = 0, r = l + k;
        let sum = 0, count = 0;

        for(let i = l; i < r; i++) {
            sum += arr[i];
        }

        if(sum >= threshold * k) count++;

        while(r < arr.length) {
            sum += arr[r];
            sum -= arr[l];

            if(sum >= threshold * k) count++;
            r++; l++;
        }
        return count;
    }
}
