/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589507729116_1674';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

exports.mysql = {
  // database configuration
  client: {
    // host
    host: '127.0.0.1',
    // port
    port: '3306',
    // username
    user: 'mytest',
    // password
    password: '123456',
    // database
    database: 'test',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};