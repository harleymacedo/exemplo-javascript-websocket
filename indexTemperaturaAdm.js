const express = require('express');
const app = express();

const io = require('socket.io-client')
const socket = io('http://localhost:3000/');

socket.on('mudouTemperatura', (temperatura)=>{
   console.log('Foi notificado');     
});

setInterval(()=>{
    console.log('Emitiu novaTemperatura');
    socket.emit('mudouTemperatura', (Math.random() * 100).toFixed(2) );
}, 5000);