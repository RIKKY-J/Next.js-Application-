import { notFound } from 'next/navigation';

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
    return <div>This is the blog page for {id}</div>;
}