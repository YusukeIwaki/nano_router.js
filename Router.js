class Router {
    constructor() {
        this._patterns = [];
        this._eventHandlers = [];
        this._noMatchHandler = undefined;
    }

    on(pattern, handler) {
        if (typeof handler == "function") {
            if (typeof pattern == "string" || typeof pattern == "function" || pattern instanceof RegExp) {
                this._patterns.push(pattern);
                this._eventHandlers.push(handler);
            }
        }
        return this;
    }

    onNoMatch(handler) {
        if (typeof handler == "function") {
            this._noMatchHandler = handler;
        }
        return this;
    }

    handle(key, ...objs) {
        if (typeof key == "string") {
            let patternIndex = this._patterns.findIndex((pattern) => {
                if (typeof pattern == "string") {
                    return pattern == key;
                } else if (typeof pattern == "function") {
                    return !!pattern(key);
                } else if (pattern instanceof RegExp) {
                    return pattern.test(key);
                } else {
                    return false;
                }
            });
            if (patternIndex == -1) {
                if (typeof this._noMatchHandler == "function") {
                    return this._noMatchHandler.apply(this, objs);
                }
            } else {
                let handler = this._eventHandlers[patternIndex];
                if (typeof handler == "function") {
                    return handler.apply(this, objs);
                }
            }
        }
        return null;
    }
}

module.exports = Router;