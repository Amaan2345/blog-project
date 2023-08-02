import {db} from '../db.js'
import  jwt from 'jsonwebtoken'

export const getPosts =(req,res)=>{
    const q= req.query.cat ? "SELECT *FROM posts WHERE cat=?"
    : "SELECT * FROM posts"
    db.query(q,[req.query.cat],(err,data)=>{
        if(err) return req.send(err)
         return res.status(200).json(data);
    } )
}



export const getPost =(req,res)=>{
    const q = "SELECT `username`, `title`,`desc`,p.img, u.img AS userImg,`cat`,`date` FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=? "
    db.query(q,[req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.status(200).json(data[0])
    })
}

export const addPost =(req,res)=>{
    res.json("Frpm con")
}

export const deletePost =(req,res)=>{


        const postId =req.params.id
        const q = "DELETE FROM posts WHERE `id` = ?"
        db.query(q,[postId],(err,data)=>{
            if(err) return res.status(403).json("post doesnt belog to you")
            return res.json("post deleted successfully")
    })
    
}


export const updatePost =(req,res)=>{
    res.json("Frpm con")
}