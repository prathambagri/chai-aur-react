import React, { useState, useEffect } from 'react';
import appwriteService from "../appwrite/config"
import { Container, PostCard } from '../components'


function AllPosts() {
    const [posts, setPosts] = useState([])
    // useEffect(()=>{},[])
    // appwriteService.getPosts([]).then((posts)=>{
    //     if (posts) {
    //         setPosts(posts.documents)
    //     }
    // })

    // code updated becouse of the error 
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        appwriteService.getPosts()
        .then((res) => {
            console.log("Fetched response:", res);
            if (res && res.documents) {
            setPosts(res.documents)
            } else {
            setPosts([])
            }
        })
        .catch((err) => {
            console.error("Error fetching posts:", err)
            setError(true)
        })
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <p className="text-center">Loading posts...</p>

    if (error) return <p className="text-center text-red-500">Failed to load posts.</p>

    if (posts.length === 0) {
        return (
        <Container>
            <p className="text-center text-gray-600">No posts found.</p>
        </Container>
        )
    }
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => {
                    return (
                        <div key={post.$id} className="p-4 w-1/4">
                        <PostCard {...post} />
                        </div>
                    );
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts