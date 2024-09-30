const http = require("http")
const fs = require("fs")
const url = require("url")
const events = require("events")

const replaceHtml = require("./Modules/replaceHtml")
const user = require("./Modules/user")


//step-1:create-server:

console.log("exe...")
const File = fs.readFileSync("./templates/index.html","utf8")
//const css = fs.readFileSync("./templates/style.css","utf-8")

//parse or convert json into js objects.
//here we write for, to avoid unwantedtly read file again and agin.so,it calculate at once at initialy
const products = JSON.parse(fs.readFileSync("./Data/products.json","utf-8"))

const productListHtml = fs.readFileSync("./templates/product-list.html","utf-8")
let productDetailHtml = fs.readFileSync('./templates/product-details.html', 'utf-8');

// let productHtmlArray = products.map((prod)=>{
//         let output = productListHtml.replace('{{%IMAGE%}}', prod.productImage);
//         output = output.replace('{{%NAME%}}', prod.name);
//         output = output.replace('{{%MODELNAME%}}', prod.modeName);
//         output = output.replace('{{%MODELNO%}}', prod.modelNumber);
//         output = output.replace('{{%SIZE%}}', prod.size);
//         output = output.replace('{{%CAMERA%}}', prod.camera);
//         output = output.replace('{{%PRICE%}}', prod.price);
//         output = output.replace('{{%COLOR%}}', prod.color);
//         output = output.replace('{{%ID%}}', prod.id);
        
//         return output;
//     })


// function replaceHtml(template, product){
//         let output = template.replace('{{%IMAGE%}}', product.productImage);
//         output = output.replace('{{%NAME%}}', product.name);
//         output = output.replace('{{%MODELNAME%}}', product.modeName);
//         output = output.replace('{{%MODELNO%}}', product.modelNumber);
//         output = output.replace('{{%SIZE%}}', product.size);
//         output = output.replace('{{%CAMERA%}}', product.camera);
//         output = output.replace('{{%PRICE%}}', product.price);
//         output = output.replace('{{%COLOR%}}', product.color);
//         output = output.replace('{{%ID%}}', product.id);
//         output = output.replace('{{%ROM%}}', product.ROM);
//         output = output.replace('{{%DESC%}}', product.Description);
    
//         return output;
//     }

// const server = http.createServer((req,res)=>{
//    console.log("A new req received")
// //    res.end("Hello world")
// //    if(req.url === "/"){
// //     res.end(File)
// //    }else if(req.url === "style.css"){
// //     res.end(css)
// //    }

// console.log(url.parse(req.url,true))

//  let {query,pathname:path} = url.parse(req.url,true)
 
// if(path === "/" || path.toLocaleLowerCase() === "/home"){
   
//     console.log("A new req received for home")
//     //to set header in response
//     res.writeHead(200,{
//         "Content-Type" : "text/html",  // default header
//         "my-header" : "Hello,world"   // custom header
//     })

//     res.end(File.replace("{{%CONTENTS%}}","You are in home page"))
 
// }else if(path.toLocaleLowerCase() === '/about'){
   
//     res.end(File.replace("{{%CONTENTS%}}","You are in about page"))

// }else if(path.toLocaleLowerCase() === '/products'){

//     if(!query.id){

//         let productHtmlArray = products.map((prod)=>{
//             return replaceHtml(productListHtml,prod)
//         })

//         let productResponsdeHtml = File.replace("{{%CONTENTS%}}",productHtmlArray.join(","))

//         res.writeHead(200,{ "Content-Type" : "text/html"})

//         res.end(productResponsdeHtml)

//     }else{
//         let prod = products[query.id]
//         let productDetailResponseHtml = replaceHtml(productDetailHtml,prod)
//         res.end(File.replace("{{%CONTENTS%}}",productDetailResponseHtml))
//     }
   
//  }
//  else if(path.toLocaleLowerCase() === '/contact'){
//     res.end(File.replace("{{%CONTENTS%}}","You are in contact page"))

//  } 
//  else{
//     res.end(File.replace("{{%CONTENTS%}}","Error-404;page not found"))

//  }
    
// })  


//server inherities from event emitter class
const server = http.createServer()

server.on("request",(req,res)=>{
   
    console.log("A new req received")
    //    res.end("Hello world")
    //    if(req.url === "/"){
    //     res.end(File)
    //    }else if(req.url === "style.css"){
    //     res.end(css)
    //    }
    
    console.log(url.parse(req.url,true))
    
     let {query,pathname:path} = url.parse(req.url,true)
     
    if(path === "/" || path.toLocaleLowerCase() === "/home"){
       
        console.log("A new req received for home")
        //to set header in response
        res.writeHead(200,{
            "Content-Type" : "text/html",  // default header
            "my-header" : "Hello,world"   // custom header
        })
    
        res.end(File.replace("{{%CONTENTS%}}","You are in home page"))
     
    }else if(path.toLocaleLowerCase() === '/about'){
       
        res.end(File.replace("{{%CONTENTS%}}","You are in about page"))
    
    }else if(path.toLocaleLowerCase() === '/products'){
    
        if(!query.id){
    
            let productHtmlArray = products.map((prod)=>{
                return replaceHtml(productListHtml,prod)
            })
    
            let productResponsdeHtml = File.replace("{{%CONTENTS%}}",productHtmlArray.join(","))
    
            res.writeHead(200,{ "Content-Type" : "text/html"})
    
            res.end(productResponsdeHtml)
    
        }else{
            let prod = products[query.id]
            let productDetailResponseHtml = replaceHtml(productDetailHtml,prod)
            res.end(File.replace("{{%CONTENTS%}}",productDetailResponseHtml))
        }
       
     }
     else if(path.toLocaleLowerCase() === '/contact'){
        res.end(File.replace("{{%CONTENTS%}}","You are in contact page"))
    
     } 
     else{
        res.end(File.replace("{{%CONTENTS%}}","Error-404;page not found"))
    
     }
})


 
//step-2:start the server:

server.listen(5000,()=>{
    console.log("The server has started")
})



// let myEmitter = new events.EventEmitter();


// myEmitter.on("userCreated",(id,name)=>{
//    console.log(`A new user ${name} with ID ${id} is created`)
// })

// myEmitter.on("userCreated",(id,name)=>{
//     console.log(`A new user ${name} with ID ${id} is added to Db`)
//  })

// myEmitter.emit('userCreated',101,"John")




//here the user class will emit the events and also listen the events

let myEmitter = new user();

myEmitter.on("userCreated",(id,name)=>{
   console.log(`A new user ${name} with ID ${id} is created`)
})

myEmitter.on("userCreated",(id,name)=>{
    console.log(`A new user ${name} with ID ${id} is added to Db`)
 })

myEmitter.emit('userCreated',101,"John")