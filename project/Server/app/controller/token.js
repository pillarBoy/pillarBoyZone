const Controller = require('egg').Controller

class TokenController extends Controller {
  async index() {
    this.ctx.body = {code: 0, token: 123456}
  }
}

module.exports = TokenController