//npm:

// Basically dependecy classified into 2 types:
// Regular dependecy
// Developement dependency  -- the our application not depend on this dependency..ie: its used for increase the developement speed



//============= Event -loop===============

//Event loop has majorly has 4 phases :

// -1. Timer phase         ====> setTimeout,setInterval callbacks collected
// -2. I/O callback phase  ====> network calls,file read/write call-backs collected
// -3. setImediate phase   ====> setImediate callback collected .Note: this setImediate execute imidiate.so,it does not have timmer
// -4. close phase         ====> If you have sockets or streams that need to be closed, their corresponding close event callbacks will be executed in this phase


//other : 

//**** This queues has higher priority ****/
// Micro task queue  ==> handle async operation ..like as data fetching from api
// NextTick queue


// console.log("Program has started")

// setTimeout(()=>{
//     console.log("Timer callback executed")
// },0)

// console.log("Program has completed")

// //o/p :
// Program has started
// Program has completed
// Timer callback executed


//===================================================================================



// console.log("Program has started")

// setTimeout(()=>{
//     console.log("Timer callback executed")
// },0)

// setImmediate(()=>{
//     console.log("setImmediate callback executed")
// })

// console.log("Program has completed")


// //o/p :
// Program has started
// Program has completed
// Timer callback executed
// setImmediate callback executed

//  Note : Incase the setTimeout has timmer,then it execute after setImmediate callback


//=============================================================================================

// const fs = require("fs")

// console.log("Program has started")

// setTimeout(()=>{
//     console.log("Timer callback executed")
// },0)

// fs.readFile("./Files/input.txt",()=>{
//     console.log("File read completed")   //This file read method takes some time to read full file.
// })

// setImmediate(()=>{
//     console.log("setImmediate callback executed")
// })

// console.log("Program has completed")

// //o/p:
// Program has started
// Program has completed
// Timer callback executed
// setImmediate callback 
// File read completed


//==================================================================================

// const fs = require("fs")

// console.log("Program has started")


// fs.readFile("./Files/input.txt",()=>{

//     console.log("File read completed")

//     setTimeout(()=>{
//         console.log("Timer callback executed")
//     },0)

//     setImmediate(()=>{
//         console.log("setImmediate callback executed")
//     })
    
    
// })

// console.log("Program has completed")


// //o/p:
// Program has started
// Program has completed
// File read completed
// setImmediate callback executed  //It executed before setTimeout.bcz,both are placed inside readFile.so,when file reading occure,that time setImmediate expire 
// Timer callback executed



//====================================================================================================


const fs = require("fs")

console.log("Program has started")


fs.readFile("./Files/input.txt",()=>{

    console.log("File read completed")

    setTimeout(()=>{
        console.log("Timer callback executed")
    },0)

    setImmediate(()=>{
        console.log("setImmediate callback executed")
    })
    
    process.nextTick(()=> {
        console.log("Process.nextTick callback executed")   //It has higher priority
    })
})

console.log("Program has completed")


// Program has started
// Program has completed
// File read completed
// Process.nextTick callback executed  
// setImmediate callback executed  
// Timer callback executed



