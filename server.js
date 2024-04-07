const express =require('express');
const app =express();
const path = require('path')
const http = require('http')
const socket = require('socket.io')
const PORT = 3001

const server = http.createServer(app)
server.listen(PORT,()=>{
console.log(`server is running on port${PORT} `);
})

app.use(express.static(path.join(__dirname,
  "public")))

  const io=socket(server)
  io.on("connection",(socket)=>{
    console.log('User is connected')
  })



