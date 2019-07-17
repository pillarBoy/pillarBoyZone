const Controller = require('egg').Controller

class LoginController extends Controller {
  async index() {
    let { body } = this.ctx.request;
    if (body.uname === 'pillar' && body.password === '123456') {
      this.ctx.body = {
        code: 0,
        data: { name: 'pillar' },
        msg: 'welcome pillar, login success.'
      }
    } else {
      this.ctx.body = {
        code: 1,
        data: '',
        msg: '账号或密码错误，请确认后重新登录'
      }
    }
  }
}

module.exports = LoginController