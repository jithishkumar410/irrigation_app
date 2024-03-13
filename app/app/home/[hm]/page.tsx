'use client'
import React from 'react'
import plantdetect from './assests/plant2.jpg'
import farm from './assests/farmmon.jpg'
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios'

export function Home({params}){
  const router = useRouter();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/auth/ch', { id: params.hm });
        console.log(response);
      } catch (error) {
        console.error(error);
        router.push('/'); // Redirect to homepage if there's an error
      }
    };

    fetchData();
  }, [params.hm, router]);
  const datid = {
    id:params.hm
  };
  return (
    
    <div className='flex justify-center items-center h-screen gap-20 bg-slate-150 '>
     
      
      <Card  className='border-2 border-green-400 rounded-lg ease-in duration-300 hover:mb-10'>
      <Image src={farm}
         alt="farm"
         className='w-[20rem] h-[20rem]'
         
         />
      
        <CardContent>
        <CardTitle className='text-center'>Farm Monitoring</CardTitle>
        </CardContent>
        <CardFooter>
        <Link href={`/dash/${params.hm}`}><Button className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:text-green-700 mt-5">Click Here</Button></Link>
        </CardFooter>
      </Card>

      <Card className='border-2 border-green-400 rounded-lg ease-in duration-300 hover:mb-10'>
    
        <Image src={plantdetect}
         alt="plants"
         className='w-[20rem] h-[20rem]'
         />
     
        <CardContent>
        <CardTitle className='text-center'>Plants Disease Detector</CardTitle>
        </CardContent>
        <CardFooter>
        <Link href={`/dash/${params.hm}`}><Button className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:text-green-700 mt-5">Click Here</Button></Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Home
