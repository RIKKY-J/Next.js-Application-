export default async function Blog({ params }) {
    console.log(await params);
    const { blogID } = await params;
    return <div> This is the blog page for {blogID} </div>;
}