// Create a server which takes in the lastest IPFS hash and returns the latest IPFS hash
// This is the server that will be used by the client to get the latest IPFS hash

const express = require('express');
const app = express();
const port = 3000;

let hash;
app.post('/ipfs', (req, res) => {
    hash = req.body
    console.log(hash)
    res.send(hash)
})
app.get('/hash', (req, res) => {
    res.send(hash)
})