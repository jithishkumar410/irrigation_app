import prisma from '@/utils/prisma';


export async function POST(request: Request) {
    try {
      
      const { id } = await request.json();
      
      const result = await prisma.user.findUnique({
        where: {
         id:id
        },
      })

        const responseBody = JSON.stringify(result);
      return new Response(responseBody, {status: 200 });
    } catch (error) {
      console.error('Error creating user:', error);
      return new Response('Error creating user', { status: 500 });
    }
  }
  
  