import React, { useContext } from 'react'
import Edit from '../images/pngtree-vector-edit-icon-png-image_889355.jpg'
import Delete from '../images/download.png'
import { Link, useLocation} from 'react-router-dom'
import Menu from '../componenets/Menu'
import moment from 'moment'
import { useEffect } from 'react'
import { useState } from 'react'
import {AuthContext} from "../context/authContext"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Single = () => {
    const [post,setPost] = useState({})
    const location = useLocation();
    const navigate =useNavigate();
    const postId = location.pathname.split('/')[2]
    const {currentUser} = useContext(AuthContext)


    useEffect(()=>{
  const fetchData = async()=>{
    try{
  const res = await axios.get(`http://localhost:8800/api/posts/${postId}`)
  setPost(res.data);
    }catch(err){
      console.log(err);
    }
  }
  fetchData();
    },[postId])
    const handleDelete = async()=>{
        try{
            await axios.delete(`http://localhost:8800/api/posts/${postId}`)
            navigate('/');
              }catch(err){
                console.log(err);
              }
    }
  return (
    <div className='single'>
        <div className='content'>
            <img src= {post?.img} alt="" />
            <div className="user">
              { post.userImg && <img src={post.userImg} alt="" />}
                <div className="info">
                    <span>{post.username}</span>
                    <p>{moment(post.date).fromNow()}</p>
                </div>
               <div className="edit">
                    <Link to={`/write?edit=2`}>
                    <img src={Edit} alt="" />

                    </Link>
                    <img onClick={handleDelete} src={Delete} alt="" />

                </div>
            </div>
            <h1>{post.title}</h1>
            {post.desc}
        </div>
        <Menu cat={post.cat}/>
    </div>
  )
}

export default Single