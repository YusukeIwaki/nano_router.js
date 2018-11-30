# Nano Router: A very tiny router library.

[https://github.com/YusukeIwaki/nano_router](nano_router) in JavaScript.

```js
const Router = require("./nano_router.js");

let router = new Router();
router.on("ping", () => "pong");
router.on(/^Hello/, () => "HELLO!!");
router.onNoMatch(() => "??")

router.handle("ping");
// => "ping"

router.handle("Hello YusukeIwaki");
// => "HELLO!"

router.handle("hogehoge");
// => "??"
```

## Install

```
npm install nano_router.js
```

or simple copy https://github.com/YusukeIwaki/nano_router.js/blob/master/Router.js 😁
