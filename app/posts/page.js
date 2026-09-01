const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function feachPosts(){
            const responnce = await fearch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await responce.json();
            setPosts(data);
        }
        featchPosts();
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