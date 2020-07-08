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
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/senden")
                students.insertOne(q.query);
            if (q.pathname == "/auslesen")
                _response.write(await retrieveOrders());
            console.log("hallo");
        }
        _response.end();
    }
    async function retrieveOrders() {
        let datenKriegen = students.find();
        let arrayOrders = await datenKriegen.toArray();
        let jsonString = JSON.stringify(arrayOrders);
        console.log(jsonString);
        return jsonString;
    }
})(Aufgabe11server = exports.Aufgabe11server || (exports.Aufgabe11server = {}));
//# sourceMappingURL=script.js.map