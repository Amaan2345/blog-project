import {db} from '../db.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';

export const  register =(req,res)=>{


    const q ="SELECT * FROM users WHERE username=? OR emaill=?";

    db.query(q,[req.body.email, req.body.username],(error,data)=>{
        if(error) return res.json(error);
        if(data.length) return res.status(409).json("User already exists!!")


        const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(req.body.password, salt);

const p = "INSERT INTO users(`username`,`emaill`,`password`) VALUES (?)"
const values=[
    req.body.username,
    req.body.email,
    hash,
]
db.query(p,[values],(error,data)=>{
    if(error) return res.json(error);
    return res.status(200).json("User has been created");
});

    });
};

export const login =(req,res)=>{


    const q="SELECT * FROM users WHERE username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found");

const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

if(!isPasswordCorrect)
 return res.status(400).json("Wrong password");

const token = jwt.sign({id:data[0].id},"adnankey");
const{password, ...other} = data[0];
res.cookie("access_token", token,{
    httpOnly:true
}).status(200).json(other)

    })
}

export const  logout =(req,res)=>{

    res.clearCookie("access_token",{
        sameSite:"none",
        secure: true

    }).status(200).json("User has been logged out")
    
}