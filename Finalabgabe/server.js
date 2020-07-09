"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinalabgabeServer = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var FinalabgabeServer;
(function (FinalabgabeServer) {
    console.log("Starting server");
    let registrations;
    let urlMongo = "mongodb+srv://user:hallo@gisvonlara.clsfx.mongodb.net/Finalabgabe?retryWrites=true&w=majority";
    let mongoClient;
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
        mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        console.log("Databaseconnection");
        return mongoClient;
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
            console.log("Kriege Daten");
            _response.write("meowejg");
            if (q.pathname == "/registration") {
                registrations = mongoClient.db("Finalabgabe").collection("Registrierungen");
                console.log("Datbase Connection regsitration", registrations != undefined);
                if (await retrieveRegistrations(q.query)) {
                    registrations.insertOne(q.query);
                }
                else {
                    _response.write("false");
                }
            }
            if (q.pathname == "/login") {
                registrations = mongoClient.db("Finalabgabe").collection("Registrierungen");
                console.log("Datbase Connection login", registrations != undefined);
                if (userValid(q.query))
                    _response.write("true");
                else
                    _response.write("false");
            }
        }
        _response.end();
    }
    async function retrieveRegistrations(_query) {
        let getData = registrations.find({ "username": _query.username });
        let arrayOrders = await getData.toArray();
        console.log("Funktion aufgerufen");
        let nameNotExisting;
        if (arrayOrders.length == 0) {
            nameNotExisting = true;
        }
        else {
            nameNotExisting = false;
        }
        return nameNotExisting;
    }
    async function userValid(_query) {
        let actualUser = registrations.find({ "username": _query.username });
        let actualPassword = registrations.find({ "password": _query.password });
        let arrayUser = await actualUser.toArray();
        let arrayPassword = await actualPassword.toArray();
        console.log("Funktion aufgerufen");
        console.log("" + arrayUser + arrayPassword);
        if (JSON.stringify(arrayUser) == JSON.stringify(arrayPassword) && arrayUser.length != 0) {
            console.log("true" + JSON.stringify(arrayUser) + JSON.stringify(arrayPassword));
            return true;
        }
        else {
            console.log("false" + JSON.stringify(arrayUser) + JSON.stringify(arrayPassword));
            return false;
        }
    }
})(FinalabgabeServer = exports.FinalabgabeServer || (exports.FinalabgabeServer = {}));
//# sourceMappingURL=server.js.map