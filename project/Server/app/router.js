// app/router.js

const baseURL = '/api'


module.exports = app => {
  const { router, controller } = app;
  const apiGet = (url, ct) => router.get(baseURL+url, ct)
  const apiPost = (url, ct) =>  router.post(baseURL+url, ct)

  router.get('/token', controller.token.index)

  apiGet('/home', controller.home.index)
  apiPost('/login', controller.login.index)
};