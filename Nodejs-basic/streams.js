// const http = require("http")

// const server = http.createServer((req,res)=>{
   
//     if(req.url == "/"){
//         res.end("Welcome to home page")
//     }else if(req.url == "/about"){
//         res.end("Welcome to about page")
//     }
// })

// server.listen(5000,()=>{
//     console.log("The server started")
// })



const http = require("http")
const fs = require("fs")

const server = http.createServer()

//Method-1:
// server.on("request",(req,res)=>{
    
//     fs.readFile("./Files/large-file.txt",(err,data)=>{
         
//         if(err){
//             res.end("error");
//             return;
//         }

//         res.end(data)
//     })

// })


//Method-2: - Stream

// server.on("request", (req, res) => {
   
//     res.setHeader('Content-Disposition', 'inline');

//     res.setHeader('Content-Type', 'text/plain');

//     let rs = fs.createReadStream("./Files/large-file.txt");

//     console.log(rs);

//     // Handle each data chunk
//     rs.on("data", (chunk) => {
//         console.log(chunk);
//         res.write(chunk);
//     });

//     // When the entire file has been read, end the response
//     rs.on("end", () => {
//         res.end();
//     });

//     // Handle errors in the stream
//     rs.on("error", (error) => {
//         res.end("Error occurred");
//     });
// });


//Method -3 : Pipe :

// In above method ,the speed of reading data and writing data ,varaiation occure.
// ie: eg for: reading 100mb/s, writing 90mb/s .Its called as back pressure.
// Its avoided by using pipe 

server.on("request",(req,res)=>{
    
    res.setHeader("Content-Disposition","inline")
    res.setHeader("Content-type","text/plain")

    let rs = fs.createReadStream("./Files/large-file.txt")
    
    rs.pipe(res)

})

server.listen(5000,()=>{
    console.log("The server started")
})