class FxmlHttpRequest {
    constructor() {
        this.method = null;
        this.url = null;
        this.item = null;
    }
    open(method, url) {
        this.method = method;
        this.url = url;
    }
    send(item) {
        if (this.url == 'serverCall') {
            this.item = item;
            return serverCall(this.method, this.item);
        }
    }
}

