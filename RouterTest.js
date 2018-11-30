let Router = require("./Router");

let router = new Router();

router.on(/^こんにちは/, (obj) => {
    return "どうも" + obj["message"];
});
router.on("hoge", (obj) => {
    return "fuga";
});
router.on((key) => Number.isInteger(key - 0), (obj) => {
    return "NUMBERS";
})

const assert = require('assert').strict;

o1 = {"message": "こんにちはYusukeIwakiさん"}
assert.strictEqual(router.handle(o1["message"], o1), "どうもこんにちはYusukeIwakiさん")

o2 = {"message": "hoge"}
assert.strictEqual(router.handle(o2["message"], o2), "fuga")

o3 = {"message": "hage"}
assert.strictEqual(router.handle(o3["message"], o3), null);

o4 = {"message": "1234567890"}
assert.strictEqual(router.handle(o4["message"], o4), "NUMBERS");


router.onNoMatch((obj) => {
    return "unknown";
});

assert.strictEqual(router.handle(o3["message"], o3), "unknown");

console.log("OK")