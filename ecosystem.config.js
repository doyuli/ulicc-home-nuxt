/** PM2 配置文件 */
module.exports = {
    apps: [
      {
        name: 'ulicc',
        port: '13002',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  