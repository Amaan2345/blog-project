import express from 'express';
import cookieParser from 'cookie-parser';

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import cors from 'cors';
import multer from 'multer';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require("dotenv").config();
const port = process.env.PORT || 3306;


const app=express();
app.use(cors())

app.use(express.json())
app.use(cors())
app.use(cookieParser())



const upload = multer({ dest: './uploads/' })
app.post('/upload', upload.single('file'), function (req, res) {
    
res.status(200).json("Image uploaded")
})

app.use('/api/auth',authRoutes)
app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)



app.listen(port,()=>{
console.log("Connected")
})
