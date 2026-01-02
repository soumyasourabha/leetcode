/**
 * 200. Number of Islands (Medium)
 * 
 * Problem:
 * Given an m x n 2D binary grid 'grid' which represents a map of '1's (land) 
 * and '0's (water), return the number of islands.
 * 
 * Strategy: Graph Traversal (DFS or BFS)
 * 1. Iterate through every cell in the grid.
 * 2. If we find a '1' (land), we found a new island.
 * 3. Use DFS to "sink" the island (turn all connected '1's into '0's).
 * 
 * Iteration / Rotation Strategy (Grid Traversal):
 * To traverse neighbors, we check: (r+1, c), (r-1, c), (r, c+1), (r, c-1).
 * 
 * Time Complexity: O(M * N) - Visit each cell once.
 * Space Complexity: O(M * N) - Worst case stack depth for recursion.
 */

function numIslands(grid) {
    if (!grid) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let islandCount = 0;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islandCount++;
                // SINK the island using DFS
                dfs(grid, r, c);
            }
        }
    }

    return islandCount;
}

function dfs(grid, r, c) {
    let rows = grid.length;
    let cols = grid[0].length;

    // Base cases for recursion (Out of bounds or water)
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === "0") {
        return;
    }

    // Mark current cell as visited (sink it)
    grid[r][c] = "0";

    // Traverse in 4 directions (Iteration logic)
    dfs(grid, r + 1, c); // Down
    dfs(grid, r - 1, c); // Up
    dfs(grid, r, c + 1); // Right
    dfs(grid, r, c - 1); // Left
}

const exampleGrid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];
console.log("Number of Islands:", numIslands(exampleGrid)); // Expected: 3
