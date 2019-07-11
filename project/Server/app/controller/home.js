// app/controller/home.js
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = {
      code: 0,
      data: 'home',
      msg: 'home json'
    };
  }
}

module.exports = HomeController;