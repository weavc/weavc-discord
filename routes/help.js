var buildresponse = require('../helpers/response');

class help {

    constructor(message, req, client) {
        this.message = message;
        this.req = req;
        this.client = client;
    }

    go(response) {
        return response(buildresponse('text', 'help'));
    }
}
module.exports = help;