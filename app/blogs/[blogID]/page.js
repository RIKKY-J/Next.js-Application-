import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
    const { blogID } = await params;
    return {
        title: `Blog ${blogID}`,
    };
}

export default async function Blog({ params }) {
    console.log(await params);
    const { blogID } = await params;
    if(typeof blogID !== 'number' && isNaN(blogID)) {
        notFound();
    }
    return <div> This is the blog page for {blogID} </div>;
}