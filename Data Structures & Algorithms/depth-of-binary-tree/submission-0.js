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
    maxDepth(root) {
        if(!root) return 0;
        
        let max = 0;
        let stack = [[root, 0]];

        while(stack.length) {
            let node = stack.pop();
            let height = node[1];

            if(node[0].right !== null) {
                stack.push([node[0].right, height + 1]);
            }       

            if(node[0].left !== null) {
                stack.push([node[0].left, height + 1]);
            }     

            max = Math.max(height, max);
        }
        return max + 1;
    }
}
