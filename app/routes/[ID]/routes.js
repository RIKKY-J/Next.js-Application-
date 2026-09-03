export async function GET(request, { params }) {
  const { ID } = params;
  return new Response(`Hello, ${ID}!`);
}