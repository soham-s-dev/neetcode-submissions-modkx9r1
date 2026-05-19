// class Solution {
//     /**
//      * @param {number[][]} triangle
//      * @return {number}
//      */
//     minimumTotal(triangle) {
//         let m = triangle.length;
//         let n = triangle[m - 1].length;
//         let dp = Array.from({length: m}, () => new Array(n).fill(Infinity));

//         dp[0][0] = triangle[0][0];

//         for(let i = 0; i < m; i++) {
//             for(let j = 0; j < triangle[i].length; j++) {
//                 if(j === 0)
//                     dp[i][j] = triangle[i][j] + dp[i - 1][j];
//                 else if(j === triangle[i].length - 1) 
//                     dp[i][j] = triangle[i][j] + dp[i - 1][j - 1];
//                 else {
//                     dp[i][j] = triangle[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j - 1]);
//                 }
//             }
//         }

//         return Math.min(...dp[dp.length - 1]);
//     }
// }

class Solution {
    /**
     * @param {number[][]} triangle
     * @return {number}
     */
    minimumTotal(triangle) {

        let m = triangle.length;
        let n = triangle[m - 1].length;

        let dp = Array.from(
            { length: m },
            () => new Array(n).fill(Infinity)
        );

        dp[0][0] = triangle[0][0];

        for (let i = 1; i < m; i++) {

            for (let j = 0; j < triangle[i].length; j++) {

                // Left edge
                if (j === 0) {

                    dp[i][j] =
                        triangle[i][j] + dp[i - 1][j];

                }

                // Right edge
                else if (j === triangle[i].length - 1) {

                    dp[i][j] =
                        triangle[i][j] + dp[i - 1][j - 1];

                }

                // Middle
                else {

                    dp[i][j] =
                        triangle[i][j] +
                        Math.min(
                            dp[i - 1][j],
                            dp[i - 1][j - 1]
                        );
                }
            }
        }

        return Math.min(...dp[m - 1]);
    }
}