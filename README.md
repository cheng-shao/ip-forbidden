# IP Forbidden
> 禁止客户端直接通过 IP 地址访问服务器

![](https://img.shields.io/npm/dm/ip-forbidden.svg)
![](https://img.shields.io/npm/v/ip-forbidden.svg)

## Installation
```bash
$npm i ip-forbidden -S
```

## Usage
```js
// 导入中间件
const ipForbidden = require('ip-forbidden')

// 安装中间件
// ipForbidden() 方法调用时候，可以提供可以可选的域名字符串
// 作用：提示用户应该通过什么样的域名来访问此服务器
app.use(ipForbidden('localhost'))
```

## License
![](https://img.shields.io/badge/license-MIT-blue.svg)