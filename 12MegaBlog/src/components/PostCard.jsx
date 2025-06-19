import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    const imageUrl = featuredImage ? appwriteService.getFilePreview(featuredImage) : null;
    
    if (!$id) return null; // Skip rendering if no ID , this is from chATGPT because of ERROR
    return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
               <img
                src={imageUrl}
                alt={title}
                className="rounded-xl w-full max-h-64 object-cover"
                />
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard