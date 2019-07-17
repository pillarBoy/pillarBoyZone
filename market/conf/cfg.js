export default {
  ws: 'wss://s.btckan.com:8080/shift',
  markets: [
    {
      pair: "BTC_USDT",
      abs: 10  // 就表示差价 > 5usdt 了
    },
    {
      pair: "ETH_USDT",
      abs: 20
    },
  ]
}