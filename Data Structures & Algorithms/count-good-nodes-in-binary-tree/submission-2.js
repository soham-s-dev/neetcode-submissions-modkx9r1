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
     * @return {number}
     */
    goodNodes(root) {

        function find(node, maxVal) {
            if(!node) return 0;

            let count = node.val >= maxVal ? 1 : 0;
            maxVal = Math.max(maxVal, node.val)
            count += find(node.left, maxVal);
            count += find(node.right, maxVal);
            return count;
        }

        return find(root, root.val);
    }
}
