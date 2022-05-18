const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

const serverHttp = http.createServer(app);

app.listen(3000);