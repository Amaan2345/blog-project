import { useState,useEffect } from 'react'
import axios from 'axios'

import React from 'react'

function Menu({cat}) {
  const [posts,setPosts] = useState([])
  useEffect(()=>{
const fetchData = async()=>{
  try{
const res = await axios.get(`http://localhost:8800/api/posts/?cat=${cat}`)
setPosts(res.data);
  }catch(err){
    console.log(err);
  }
}
fetchData();
  },[cat])
   /* const posts=  [{id:194975012,title:"Repudiandae soluta mollitia culpa quas voluptas voluptatem numquam.",desc:"Et expedita aut voluptates voluptas odit nesciunt. Deleniti eum sed delectus repellat et dolores. Aspernatur deserunt qui quisquam animi.",img:'https://domf5oio6qrcr.cloudfront.net/medialibrary/12257/conversions/b599a20a-a453-425a-9d2f-fa2ff8ba2776-thumb.jpg'},
    {id:4803,title:"Eligendi sit fuga inventore quam.",desc:"Voluptas incidunt cumque in recusandae molestiae. Nesciunt non quod sit sint rerum at. Et accusamus sunt fuga quasi.",img:'https://www.adani.com/-/media/Project/Adani/Banner-Images/fruits_banner.jpg'},
    {id:510,title:"Consequatur similique vitae nam in consequatur optio.",desc:"Ut non beatae totam laborum et. Optio ipsum eligendi non dolorem. Consequatur nulla porro quaerat quis explicabo sequi.",img:'https://post.healthline.com/wp-content/uploads/2019/10/rambutan-exotic-fruit-1200x628-facebook.jpg'},
    {id:69,title:"Animi voluptatem est rerum dolorum.",desc:"Voluptas dicta ab consequatur voluptatem. In laboriosam omnis non quo aut sed tenetur. Nostrum aut quia exercitationem provident. Ea rerum enim et odit delectus.",img:'https://www.pubhort.org/fruits/78/2/7/ga.jpeg'},
    {id:47436,title:"Illo temporibus neque distinctio assumenda eos ipsa illum laboriosam.",desc:"Perspiciatis beatae expedita assumenda dolores. Non quia perspiciatis qui. Consequuntur dolorum explicabo quas sit. Itaque nam est porro voluptatum quae blanditiis consequatur dolorum."}]*/
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className='post' key={post.id}>
                <img src={post.img} alt='' />
                <h2>
{post.title}
                </h2>
                <button>Read more</button>
                
                 </div>
        ))}
    </div>
  )
}

export default Menu