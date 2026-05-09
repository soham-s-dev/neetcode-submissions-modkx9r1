/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = [];
        if(!root) return res;
        
        let queue = [root];

        while(queue.length) {
            let n = queue.length;
            let curr = [];
            
            for(let i = 0; i < n; i++) {
                let node = queue.shift();
                curr.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            res.push(curr);
        }
        return res;
    }
}
