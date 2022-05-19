const express = require('express');
const app = express();

const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('mensageiro', (msg) => {
    io.emit('mensageiro', msg);
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}/`);
});
