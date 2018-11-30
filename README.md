# Pico Router: A very tiny router library.

[https://github.com/YusukeIwaki/nano_router](nano_router) in JavaScript.

```js
const Router = require("./pico_router");

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
npm install pico_router
```

or simple copy https://github.com/YusukeIwaki/pico_router/blob/master/Router.js 😁
