
//export const dynamic = "force-dynamic";
export default async function page(searchParams) {
  const { params } = await searchParams;
  return (
    <div>
      <h1>Services</h1>
      <p>Welcome to the Services page!</p>
      <li> <a href="/services/web-dev">Web Development</a></li>
      <li> <a href="/services/system">System</a></li>
    </div>
  )
}
