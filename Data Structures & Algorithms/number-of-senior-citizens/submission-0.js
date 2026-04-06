class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        return details.filter((detail) => {
            return parseInt(detail.substring(detail.length - 4, detail.length - 2)) > 60;
        }).length;
    }
}
