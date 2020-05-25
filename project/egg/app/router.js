'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = async app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  console.log(app.mysql);
  
  
};
