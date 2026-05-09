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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];

        let res = [];

        function traverse(node, depth) {
            if(!node) return 0;
            
            if(depth === res.length) {
                res.push(node.val);
            }

            traverse(node.right, depth + 1);
            traverse(node.left, depth + 1);
        }
        traverse(root, 0);
        return res;
    }
}
