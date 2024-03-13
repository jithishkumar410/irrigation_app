'use client'
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import alimg from './assests/red-flasher-icon-flat-design-isolated-white_118339-660.jpg'
import rec from './assests/business-background-design_1270-63.jpg'
import cam from './assests/cam.jpg'
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import Pie from './pie';
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import axios from 'axios'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosWater } from "react-icons/io";
import { MdDeviceHub } from "react-icons/md";
import { IoPower } from "react-icons/io5";

import {Cal} from './cal'
import { cookies } from 'next/headers';
const Dash = ({ params }) => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [dev,setdev]=useState(true)
  const [weData, setweData] = useState({});
  const s=false
  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.post('http://localhost:3000/api/auth/ch', { id: params.did });
        setUserData(response.data);
        const response2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${response.data.location}&appid=2080e7edcdeade8f55f3f7334e9e6744`);
        setweData(response2.data);
       
      } catch (error) {
        console.error(error);
        
      }
    };

    fetchData();
  }, [params.did]);
 
     
 
  return (
    <div className='bg-slate-50 h-screen flex justify-center items-center gap-4'>
{/* big card */}
<div className='flex flex-col gap-4'>

  <Card className='flex items-center h-48 justify-evenly border-2 border-red-300'>
  <div>
    <CardHeader className='text-center'>
    <CardTitle className='text-[1.5rem]'>Alerts</CardTitle>
    </CardHeader>
    <CardFooter className='text-center'>
      <Link href={`/dash/${params.did}/alerts`}><Button  className="bg-red-700 hover:bg-white hover:border-2 hover:border-red-700 hover:text-red-700 mt-5 ">View Alerts</Button></Link>
    </CardFooter>
    </div>
    <div >
      <CardContent >
    <Image src={alimg}
         
         alt="Alert"
         width={80}
         height={70}
         />
        </CardContent>
      </div>
  </Card>

  <Card className='flex items-center h-48 justify-evenly border-2 border-green-300 '>
  <div>
    <CardHeader className='text-center'>
    <CardTitle className='text-[1.5rem]'>Suggestions</CardTitle>
    </CardHeader>
    <CardFooter className='text-center'>
      <Link href={`/dash/${params.did}/alerts`}><Button  className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:text-green-700 mt-5 ">Click Here</Button></Link>
    </CardFooter>
    </div>
    <div >
      <CardContent >
    <Image src={rec}
         alt="recoomand"
         width={100}
         height={100}
         />
        </CardContent>
      </div>
  </Card>

  <Card className='flex items-center h-48 justify-evenly border-2 border-blue-300 '>
  <div>
    <CardHeader className='text-center'>
    <CardTitle className='text-[1.5rem]'>Monitoring</CardTitle>
    </CardHeader>
    <CardFooter className='text-center'>
      <Link href={`/alert/${params.did}`}><Button  className="bg-blue-700 hover:bg-white hover:border-2 hover:border-blue-700 hover:text-blue-700 mt-5 ">Monitor</Button></Link>
    </CardFooter>
    </div>
    <div >
      <CardContent >
    <Image src={cam}
         alt="camera"
         width={120}
         height={120}
         />
        </CardContent>
      </div>
  </Card>
</div>
{/* big card */}



{/* small cards */}
<div className='flex gap-4 flex-col'>
<div className='flex gap-3 '>
    <div>
        <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl '>
              <CardContent className='text-start mt-2'>
                  <p className='flex gap-1 items-center text-xl '><FaLocationDot className=' text-[1.5rem] text-green-600' /> Location </p>
              </CardContent>
      {userData && (
         <CardContent>
               <CardTitle className='text-center p-2 text-xl bg-green-500 rounded'>
               {userData.location}</CardTitle>
           </CardContent>
           )}
    </Card>
       
        </div>
    <div>
             <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl'>
              <CardContent className='text-start mt-2'>
              <p className='flex gap-1 items-center text-lg '><IoIosWater className=' text-[1.5rem]  text-blue-500' /> Water Used </p>
              </CardContent>
              <CardContent>
                <CardTitle className='text-center p-2 text-xl font-semibold bg-blue-500 rounded'>526 Litres</CardTitle> 
              </CardContent>
             </Card>
    </div>
    <div>
             <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl'>
              <CardContent className='text-start mt-2'>
              <p className='flex gap-1 items-center text-lg '><FaTemperatureHigh  className=' text-[1.5rem] text-red-500' />Temperature</p>
              </CardContent>
              <CardContent>
                {weData?.main?.temp !== undefined ? (
   <CardTitle className='text-center p-2 text-xl font-semibold bg-red-500 rounded'>{Math.round(weData.main.temp-274.15)} C</CardTitle> 
  ):(<Skeleton className=" p-6 rounded" />)}
        
              </CardContent>
             </Card>
    </div>

      <div>
             <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl'>
              <CardContent className='text-start mt-2'>
              <p className='flex  items-center text-lg '><WiHumidity className=' text-[2rem] text-blue-800' /> Humidity </p>
              </CardContent>
              <CardContent>
              {weData?.main?.temp !== undefined ? (
   <CardTitle className='text-center p-2 font-semibold text-xl bg-blue-300 rounded'>{weData.main.humidity} %</CardTitle> ):(<Skeleton className=" p-6 rounded" />)}
              </CardContent>
             </Card>    
    </div>
   


</div>
{/* small ends */}


 {/* side card */}
 <div className='flex justify-end h-42 gap-4'>
  <Card className='border-2  border-2 border-slate-250 shadow-xl'>
  <Pie  />
  </Card>
  
  
 
    <Cal/>
    
  </div>
  
{/* side card */}


{/* cards 2 */}
<div className='flex gap-4'>
<div>
             <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl flex justify-center flex-col'>
              <CardContent className='text-start mt-2'>
              <p className='flex gap-1 items-center text-md '><IoPower  className=' text-[1.5rem] text-green-500' />Device ON/OFF</p>
              </CardContent>
              <CardContent>
            <CardTitle className='flex items-center justify-center'>
            {dev?<Label className='mr-2 text-lg bg-red-500 p-1 rounded ' htmlFor="airplane-mode">OFF</Label>:<Label  className='mr-2 text-lg  bg-green-500 p-1 rounded' htmlFor="airplane-mode">ON</Label>}
              <Switch id="airplane-mode" onClick={()=>{
              setdev(!dev)
              console.log(dev)
            }} />
            
     
      
      </CardTitle>
              </CardContent>
             </Card>
    </div>
<div>
             <Card className=' w-52 h-32 border-2 border-slate-250 shadow-xl'>
              <CardContent className='text-start mt-2'>
              <p className='flex gap-1 items-center text-lg '><MdDeviceHub className=' text-[1.5rem] text-green-500' />Device Status</p>
              </CardContent>
              <CardContent>
                { dev?<CardTitle className='text-center p-2 font-semibold text-md bg-red-500 rounded'>Stopped...</CardTitle>:<CardTitle className='text-center p-2 font-semibold text-md bg-green-500 rounded'>Running....</CardTitle>}

              </CardContent>
             </Card>
    </div>
    </div>
{/* cards 2 */}
</div>


    </div>
  );
};

export default Dash;
