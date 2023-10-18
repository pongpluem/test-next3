export async function GET(request, { params }) {
    const slug = params.slug // 'a', 'b', or 'c'
    return new Response('Hello, Next.js!' + slug)

  }