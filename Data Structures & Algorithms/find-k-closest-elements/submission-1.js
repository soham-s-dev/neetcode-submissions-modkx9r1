class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let index = binarySearch(0, arr.length - 1);

        let l = index - 1, r = index;

        while(k > 0) {
            if(l < 0) r++;
            else if(r >= arr.length) l--;
            else if(Math.abs(arr[r] - x) < Math.abs(arr[l] - x))
                r++;
            else l--;
            k--;
        }

        function binarySearch(l, r) {
            while(l < r) {
                let mid = Math.floor((l + r) / 2);
                if(arr[mid] > x) 
                    r = mid;
                else 
                    l = mid + 1;
            }
            return l;
        }
        return arr.slice(l + 1 , r);
    }
}
