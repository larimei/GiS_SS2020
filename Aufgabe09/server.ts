import * as Http from "http";
import * as url from "url";

export namespace A09Server {
  console.log("Starting server");

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;  //port wird erstellt -> falls noch keiner vorhanden ist

  let server: Http.Server = Http.createServer();  //Server wird erstellt mit 2 Listener

  server.addListener("request", handleRequest);    //wenn Anfrage gestellt wird
  server.addListener("listening", handleListen);  //wenn er gestartet wird und anfängt zu "hören"
  server.listen(port);




  function handleListen(): void {
    console.log("Listening"); 
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("I hear voices!");
    console.log(_request.url);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
    let q: url.UrlWithParsedQuery = url.parse(_request.url, true);


    if (q.pathname == "html") {
    for (let key in q.query) {
          _response.write(key + ": " + q.query[key] + "<br/>");
        }

    }

    if (q.pathname == "/json")
    _response.write(JSON.stringify(q.query));



    _response.end();
  }
}
}