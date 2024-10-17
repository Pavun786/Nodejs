const express = require("express")

const app = express()

// app.use(express.json())


const port = 4200;

app.get("/", (req, res) => {
    res.send(" welcome to my app");
});

app.post("/addData",(req,res)=>{
    const data = req.body
    console.log(data)
})


app.listen(port,()=>{
    console.log(`The server run on ${port}`)
})

