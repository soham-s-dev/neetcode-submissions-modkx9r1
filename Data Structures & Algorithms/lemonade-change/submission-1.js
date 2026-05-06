class Solution {
    /**
     * @param {number[]} bills
     * @return {boolean}
     */
    lemonadeChange(bills) {
        let five = 0, ten = 0;

        for(let bill of bills) {
            if(bill === 5) 
                five++;
            else if(bill === 10) {
                ten++;
                if(five > 0)
                    five--;
                else 
                    return false;
            } else {
                if(ten > 0 && five > 0) {
                    ten--;
                    five--;
                } else if(five >= 3) {
                    five -= 3;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
}
