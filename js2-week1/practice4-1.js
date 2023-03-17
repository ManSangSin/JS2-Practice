let stock = {
  name: "aapl",
  //objects cannot access its own properties, you need to declare a function to get the value
  //lastClosingPrice: this.lastFiveDaysClosingPrices[4],
  lastClosingPrice: function () {
    return this.lastFiveDaysClosingPrices[4];
  },
  lastFiveDaysClosingPrices: [179.99, 180.33, 176.28, 175.64, 173.99],
};

console.log(stock.lastClosingPrice());
