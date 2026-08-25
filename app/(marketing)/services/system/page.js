export default async function system({ params }) {
    console.log(await params);
    return <div> This is a system page </div>
}