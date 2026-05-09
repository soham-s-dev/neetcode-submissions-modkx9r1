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
     * @return {TreeNode}
     */
    invertTree(node) {
        if(!node) return node;

        if(node.left) {
            this.invertTree(node.left);
        }

        if(node.right) {
            this.invertTree(node.right);
        }

        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        return node;
    }
}
