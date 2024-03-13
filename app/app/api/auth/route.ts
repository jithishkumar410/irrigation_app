
import prisma from '@/utils/prisma';

export async function POST(request: Request) {
  try {
    
    const { email, pass, location } = await request.json();
    
    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: pass,
        
        location: location, 
      },
    });

    const responseBody = JSON.stringify(newUser);
    return new Response(responseBody, {status: 200 });
  } catch (error) {
    console.error('Error creating user:', error);
    return new Response('Error creating user', { status: 500 });
  }
}

