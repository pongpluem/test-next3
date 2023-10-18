
/*
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
}
*/

export async function GET(request) {    
    return new Response('Hello, Next.js!')
  }