// app/router.js

const baseURL = '/api'


module.exports = app => {
  const { router, controller } = app;
  const get = (url, ct) => router.get(baseURL+url, ct)
  const post = (url, ct) =>  router.post(baseURL+url, ct)
  // router.get('/login', controller.login.index);
  get('/home', controller.home.index)
  post('/login', controller.login.index)
};