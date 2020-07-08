import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";



export namespace Aufgabe11server {


  console.log("Starting server");

  let students: Mongo.Collection;
  let urlMongo: string = "mongodb+srv://user:hallo@gisvonlara.clsfx.mongodb.net/Test?retryWrites=true&w=majority";

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;  //port wird erstellt -> falls noch keiner vorhanden ist

  startServer();
  connectToDatabase(urlMongo);

  function startServer(): void {  
        
        let server: Http.Server = Http.createServer();  //Server wird erstellt mit 2 Listener

        server.addListener("request", handleRequest);    //wenn Anfrage gestellt wird
        server.addListener("listening", handleListen);  //wenn er gestartet wird und anfängt zu "hören"
        server.listen(port);
    }

  async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = {useNewUrlParser: true, useUnifiedTopology: true};
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        students = mongoClient.db("Test").collection("Students");
        console.log("Datbase Connection", students != undefined);
          }


  function handleListen(): void {
    console.log("Listening"); 
  }

  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
    console.log("I hear voices!");
    console.log(_request.url);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
   
      if (q.pathname == "/senden")
      students.insertOne(q.query);
     
      if (q.pathname == "/auslesen")
      _response.write(await retrieveOrders());

      console.log("hallo");

    }

    _response.end(); }
  
  async function retrieveOrders(): Promise<string> {
    let datenKriegen: Mongo.Cursor<string> = students.find();
    let arrayOrders: string[] = await datenKriegen.toArray();
    
    let jsonString: string = JSON.stringify(arrayOrders);

    console.log(jsonString);
   

    return jsonString;
  }

}

