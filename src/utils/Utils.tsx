export const currencyFormat = (num: Number, symbol = "$", decimals = 0) =>
  symbol +
  " " +
  num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
