/**
 * 121. Best Time to Buy and Sell Stock (Easy)
 * 
 * Problem:
 * You are given an array prices where prices[i] is the price of a given stock 
 * on the ith day. You want to maximize your profit by choosing a single day 
 * to buy one stock and choosing a different day in the future to sell that stock.
 * 
 * Strategy: Sliding Window (Two Pointers)
 * 1. Initialize l = 0 (buy), r = 1 (sell).
 * 2. If profit > 0: calculate max profit.
 * 3. If prices[l] > prices[r]: we found a new lower buy price. Move l to r.
 * 4. Move r forward always.
 * 
 * Time: O(n)
 * Space: O(1)
 */

function maxProfit(prices) {
    let l = 0, r = 1; // Left=Buy, Right=Sell
    let maxP = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxP = Math.max(maxP, profit);
        } else {
            l = r; // Found a new minimum
        }
        r++;
    }
    return maxP;
}

console.log("Max Profit [7,1,5,3,6,4]:", maxProfit([7, 1, 5, 3, 6, 4])); // 5
