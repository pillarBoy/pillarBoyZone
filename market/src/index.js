import notify from './Notice'
import cfg from '../conf/cfg'

const notice = (msg) => notify({
  title: '瞄瞄喵',
  body: msg
})

// btcusdt: () => {}
const rules = {};
function initRule() {
  cfg.markets.forEach(pair => {
    let key = pair.pair.toLocaleLowerCase().replace('_', '')
    let ruleAbs = pair.abs;
    rules[key] = (pair, s1, b1) => {
      let abs = Math.abs(s1 - b1)
      if (abs > ruleAbs) notice('瞄瞄咪啊' + pair[0] + pair[pair.length-1] + ' abs: ' + abs.toFixed(2))
    }
  })
}
initRule()

function wss(pairs) {
  let ws = new WebSocket(cfg.ws)
  ws.onopen = function () {
    setInterval(() => ws.send('{"ping": 18212558000}'), 15000)
    Object.keys(pairs).forEach(pair => ws.send(`{"sub":"trade_depth", "trade_pair":"${pair}", "type":"add","step":${1}}`))
  }
  ws.onmessage = function (msg) {
    let data = JSON.parse(msg.data)
    if (!data || !data.asks || !data.bids) return;
    if (pairs[data.pair] && typeof pairs[data.pair] === 'function') {
      pairs[data.pair](data.pair, data.asks[0][0], data.bids[0][0])
    }
    data = null;
  }
}

wss(rules)