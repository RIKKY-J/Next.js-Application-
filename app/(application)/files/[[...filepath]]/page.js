export const metadata = {
  title: 'Files',
};

export default async function File({ params }) {
    //console.log(await params);
    const { filepath } = await params;
    return <div> File /{filepath?.join("/")} </div>;
}