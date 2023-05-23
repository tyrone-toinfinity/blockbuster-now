export async function POST(request: Request) {
  const { message } = await request.json(); // Extract the 'message' property from the request body
  return new Response(`Received message: ${message}`);
}
