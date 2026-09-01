'use client';

import { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchPosts(){
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await response.json();
            setPosts(data);
        }
        fetchPosts();
    }, []);
    return (
        <>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </>
    )
}

export default Posts;