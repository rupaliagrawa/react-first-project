const express = require('express');
const app = express();
const socket = require('socket.io');

const server = app.listen(3001, ()=>{
    console.log("listning the server port 3002")

})

const io = socket(server, {
    cors: {
        origin :'*'
    }
})

io.on("connection", )

app.get("/", (req,res)=>{
    res.send("Hello");
})