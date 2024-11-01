const express = require('express');
const mongoose = require('mongoose');
const cookieparse = require('cookie-parser');
const cors = require('cors');
const authRouter = require('./routes/auth/auth_routes')

//database connection
mongoose.connect('<Nosql Connectivity link>').then(()=>console.log('MongoDB connected')).catch((error) => console.log(error)) ;

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
app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server is now running on ${PORT}`));
