import React, {useEffect, useState} from 'react'

export default function Posts() {

    const [isLoading, setIsLoading] = useState(true)
    const [posts,setPosts] = useState(null)
    
    useEffect(() => {
        fetch('http://localhost:1337/api/posts',
        {
            method: "GET",
            headers: {
                'Accept': 'Application/json'
            }
        })
        .then(res => res.json())
        .then(response => {
            setPosts(response)
            setIsLoading(false)
        })
    },[])
    return (
        <div>
            <h1>List post</h1>
            <div>
                {isLoading ? 'Loading..' : posts.map(post => <h2>{post.title}</h2> )}
            </div>
        </div>
    )
}