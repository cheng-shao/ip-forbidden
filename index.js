module.exports = function (domain = '') {
  return function func(req, res, next) {
    const host = req.headers.host.split(':')[0]
    if (/\d+\.\d+\.\d+\.\d+/.test(host)) {
      res.statusCode = 403
      res.json({ err_code: 403, msg: `Forbidden：请使用域名 ${domain} 访问此服务器！` })
    } else {
      next()
    }
  }
}