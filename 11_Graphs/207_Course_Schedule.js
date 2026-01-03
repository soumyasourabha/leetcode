/**
 * 207. Course Schedule (Medium)
 * 
 * Problem:
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * Some courses may have prerequisites. return true if you can finish all courses.
 * 
 * Strategy: Graph Cycle Detection (BFS - Kahn's Algorithm)
 * If there is a cycle in the prerequisites graph, you can't finish the courses.
 * 
 * Logic (Kahn's):
 * 1. Build an adjacency list and calculate the 'In-Degree' (incoming edges) for each course.
 * 2. Add all courses with 0 In-Degree to a Queue.
 * 3. While queue is not empty:
 *    - Pop course, increment 'processedCount'.
 *    - For each neighbor (dependent course), decrement its In-Degree.
 *    - If In-Degree becomes 0, add to Queue.
 * 4. If processedCount === numCourses, then there was no cycle.
 * 
 * Time: O(V + E) - Visit every vertex and edge.
 * Space: O(V + E) - Adjacency list storage.
 */

function canFinish(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    // Build Graph
    for (let [course, pre] of prerequisites) {
        adj[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let count = 0;
    while (queue.length > 0) {
        let curr = queue.shift();
        count++;

        for (let neighbor of adj[curr]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return count === numCourses;
}

console.log("Can Finish 2 courses [[1,0]]:", canFinish(2, [[1, 0]])); // true
console.log("Can Finish 2 courses [[1,0],[0,1]]:", canFinish(2, [[1, 0], [0, 1]])); // false
