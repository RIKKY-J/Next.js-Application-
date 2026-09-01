const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function feachPosts(){
            const responnce = await fearch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await responce.json();
            console.log(data);
        }
        featchPosts();
    })
    return (
        <>
            <h1>Posts</h1>
        </>
    )
}

export default Posts;