import { notFound } from 'next/navigation';

export const dynamicParams = false;
export const revalidate = 2;
export async function generateStaticParams() {
    return [
        { blogID: '1' },
        { blogID: '2' },
    ];
}

export async function generateMetadata({ params }) {
    const { blogID } = await params;
    return {
        title: `Blog ${blogID}`,
    };
}

export default async function Blog({ params }) {
    const { blogID } = await params;
    const id = Number(blogID);
    if (!Number.isInteger(id)) {
        notFound();
    }
    return <div> <h1>This is the blog page for {id} at Date {new Date().toLocaleString()}</h1><views /><likes /><comments /></div>;
}