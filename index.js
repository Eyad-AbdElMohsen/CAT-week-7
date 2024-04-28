const http = require("http");
const url = require("url");

const server = http.createServer((request , response)=>{
    const link = url.parse(request.url , true);
    if(link.pathname == "/add"){
        const ans = Number(link.query.a) + Number(link.query.b);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(ans.toString());
    }
    else if ( link.pathname == "/subtract"){
        const ans = Number(link.query.a) - Number(link.query.b);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(ans.toString());
    }
    else if (link.pathname == "/multiply"){
        const ans = Number(link.query.a) * Number(link.query.b);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(ans.toString());
    }
    else if(link.pathname == "/divide"){
        const ans = Number(link.query.a) / Number(link.query.b);
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end(ans.toString());
    }
    else{
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end("not Found!!!");
    }
});
server.listen(3000 , () => {console.log("server in port 3000")});
