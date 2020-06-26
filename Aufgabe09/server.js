"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const url = require("url");
var A09Server;
(function (A09Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //port wird erstellt -> falls noch keiner vorhanden ist
    let server = Http.createServer(); //Server wird erstellt mit 2 Listener
    server.addListener("request", handleRequest); //wenn Anfrage gestellt wird
    server.addListener("listening", handleListen); //wenn er gestartet wird und anfängt zu "hören"
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            if (q.pathname == "/json")
                _response.write(JSON.stringify(q.query));
            _response.end();
        }
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//# sourceMappingURL=server.js.map