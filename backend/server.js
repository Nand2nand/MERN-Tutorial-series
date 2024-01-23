const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/note');

const app = express();
dotenv.config();

app.get('/',(req,res)=>{
    res.send('Api is running....')
})

app.get('/api/notes',(req,res)=>{
    res.json(notes);
})

app.get('/api/notes/:id',(req,res)=>{
    const note = notes.find((n)=>n._id === req.params.id);
    res.send(note);
})
const PORT = process.env.port || 5000;
app.listen(PORT,console.log(`Server started on PORT ${PORT}`));