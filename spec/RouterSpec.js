let Router = require("../Router");

describe("typical use case", () => {
    let router = new Router();
    beforeAll(() => {
        router.on(/^こんにちは/, (obj) => {
            return "どうも" + obj["message"];
        });
        router.on("ping", (obj) => {
            return "pong";
        });
        router.on((key) => Number.isInteger(key - 0), (obj) => {
            return "NUMBERS";
        });
    });
    it("works well with RegExp filter", () => {
        let m = {"message": "こんにちはYusukeIwakiさん"};
        expect(router.handle(m["message"], m)).toEqual("どうもこんにちはYusukeIwakiさん");
    });
    it("works well with exact-string filter", () => {
        let m = {"message": "ping"};
        expect(router.handle(m["message"], m)).toEqual("pong");
    });
    it("works well with predicate function filter", () => {
        let m = {"message": "1234567890"};
        expect(router.handle(m["message"], m)).toEqual("NUMBERS");
    });
    it("works well when unknown key is given", () => {
        let m = {"message": "pong"};
        expect(router.handle(m["message"], m)).toBeNull();

        router.onNoMatch((obj) => {
            return "unknown";
        });
        expect(router.handle(m["message"], m)).toEqual("unknown");
    });
});
