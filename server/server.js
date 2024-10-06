const express = require('express');
const mongoose = require('mongoose');
const cookieparse = require('cookie-parser');
const cors = require('cors');

//database connection
mongoose.connect('mongodb+srv://utkarshkumaruttu:o2qJZdLKqPRi22qW@cluster0.iye1i.mongodb.net/').then(()=>console.log('MongoDB connected')).catch((error) => console.log(error)) ;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin : 'https://localhost:5173',
        methods : ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders : [
            "Content-Type",
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials : true,
    })
);

app.use(cookieparse());
app.use(express.json());
app.listen(PORT, () => console.log(`Server is now running on ${PORT}`));