

const fs = require("fs");


//read and write file method -sync way:

// const textIn= fs.readFileSync("./Files/input.txt","utf-8")

// console.log(textIn)

// fs.writeFileSync("./Files/output.txt","Thanks for welcome")



//read and write file  - async way:
//In this method the code works async way.
//In readFile methos,if there is no such a file ,it throw error.
//it accept two parameter, 1.error,2.data

fs.readFile("./Files/start.txt","utf-8",(error,data1)=>{
     console.log(data1)  // input
     fs.readFile(`./Files/${data1}.txt`,"utf-8",(error,data2)=>{
       console.log(data2) // Hello Huys,Please welcome
       fs.writeFile("./Files/output.txt",data2,()=>{
         console.log("File written successfully")
       
        })
    
    })
})

console.log("Good morning to all")




