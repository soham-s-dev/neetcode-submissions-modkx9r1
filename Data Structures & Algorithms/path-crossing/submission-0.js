class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let map = {};
        let sX = 0, sY = 0;
        map[`${sX},${sY}`] = 1;
        for(let i = 0; i < path.length; i++) {
            if(path[i] === 'N') sY++;
            else if(path[i] === 'S') sY--;
            else if(path[i] === 'E') sX++;
            else if(path[i] === 'W') sX--;

            if(map[`${sX},${sY}`]) return true;
            map[`${sX},${sY}`] = 1;
        }
        return false;
    }
}
