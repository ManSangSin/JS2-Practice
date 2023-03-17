let stock = {
  name: "aapl",
  lastClosingPrice: 171.45,
  lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
};

stock.name; // output: aapl
stock["name"]; // output: aapl
stock.lastClosingPrice * 100; // output: 17145
stock.lastFiveDaysClosingPrices[1]; // output: 176.28

stock.name = "AAPL"; // output: no output, reassigning "AAPL" to "name" key in stock object

stock; // output: name: "AAPL", lastClosingPrice: 171.45, lastFiveDaysClosingPrices: [180.33, 176.28, 175.64, 172.99, 171.45],
