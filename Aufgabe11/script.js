"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11server = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Aufgabe11server;
(function (Aufgabe11server) {
    console.log("Starting server");
    let students;
    let urlMongo = "mongodb+srv://user:hallo@gisvonlara.clsfx.mongodb.net/Test?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100; //port wird erstellt -> falls noch keiner vorhanden ist
    startServer();
    connectToDatabase(urlMongo);
    function startServer() {
        let server = Http.createServer(); //Server wird erstellt mit 2 Listener
        server.addListener("request", handleRequest); //wenn Anfrage gestellt wird
        server.addListener("listening", handleListen); //wenn er gestartet wird und anfängt zu "hören"
        server.listen(port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        students = mongoClient.db("Test").collection("Students");
        console.log("Datbase Connection", students != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            for (let key in q.query) {
                _response.write(key + ": " + q.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(q.query);
            _response.write(jsonString);
            students.insert(q.query);
        }
        _response.end();
    }
})(Aufgabe11server = exports.Aufgabe11server || (exports.Aufgabe11server = {}));
//# sourceMappingURL=script.js.map