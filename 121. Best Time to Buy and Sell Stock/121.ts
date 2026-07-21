function maxProfit(prices: number[]): number {
  let min = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    profit=Math.max(profit, prices[i] - min);
  }

  return profit;
}
