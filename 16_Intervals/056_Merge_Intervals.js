/**
 * 56. Merge Intervals (Medium)
 * 
 * Problem:
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping 
 * intervals, and return an array of the non-overlapping intervals that cover all the 
 * intervals in the input.
 * 
 * Logic:
 * 1. Sort the intervals by their starting time.
 * 2. Initialize an empty 'output' array with the first interval.
 * 3. Iterate through intervals:
 *    - If the current interval's START is <= the LAST interval's END in output:
 *      They overlap! Merge them by updating the END of the last interval to max(lastEnd, currEnd).
 *    - Otherwise: They don't overlap. Push the current interval to output.
 * 
 * Time: O(n log n) due to sorting.
 * Space: O(n) for the output array.
 */

function merge(intervals) {
    if (intervals.length <= 1) return intervals;

    // 1. Sort by START time
    intervals.sort((a, b) => a[0] - b[0]);

    const output = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastEnd = output[output.length - 1][1];
        let currStart = intervals[i][0];
        let currEnd = intervals[i][1];

        if (currStart <= lastEnd) {
            // Overlap: Merge by extending the end
            output[output.length - 1][1] = Math.max(lastEnd, currEnd);
        } else {
            // No overlap: Add new interval
            output.push(intervals[i]);
        }
    }

    return output;
}

console.log("Merge [[1,3],[2,6],[8,10],[15,18]]:", merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
// [[1,6],[8,10],[15,18]]
