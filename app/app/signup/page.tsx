
'use client'
import * as React from "react"
import Image from 'next/image';
import Link from "next/link";
import farimg from "./assests/signupim.jpg";
import Swal from 'sweetalert2'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";
import {useRouter} from 'next/navigation'
import { Label } from "@/components/ui/label"
import axios from "axios";



const signup = ()=> {
  const [email,setemail] = useState<string>('');
  const [pass,setpass]= useState<string>('');
  // const [dev,setdev]= useState();
  const [location,setloaction]= useState<string>('');
  
  const router = useRouter();

  const handsum = (e) => {
    e.preventDefault;
    if(email==="" || pass==="" || location===""){
      
      Swal.fire({
        title: 'Invalid Login!',
        text: 'Enter Valid Email, Password, Location',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    else{
  axios.post('/api/auth',{email,pass,location})
  .then((res)=>{
    if(res.status==200){
      Swal.fire({
       
        icon: "success",
        title: "Login Sucessfully",
        showConfirmButton: false,
        timer: 1500
      });
      const data={
        em:email
      }
      router.push(`/home/${res.data.id}`);

    }
    else{
      Swal.fire({
        title: 'Invalid Login!',
        text: 'Enter Correct Email and Password',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  })
  .catch((err)=>console.log(err.status))
    }
   
}
  return (
    <div className="flex justify-center items-center h-screen">
     
    <Card className=" border-green-700 border-2 flex  ">
      
         <div>
      <CardHeader>
        <CardTitle className="text-center text-green-700">Signup Page</CardTitle>
        
      </CardHeader>
      <CardContent>
        <div>
         </div>
        <form className="mx-5">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-green-800 font-semibold">Email</Label>
              <input id="email" type="email" required className="border-green-700 border-2 hover:border-green-700 p-2 rounded" placeholder="Your Email" onChange={(e)=>
           setemail(e.target.value) }  />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pass" className="text-green-700 font-semibold">Create Password</Label>
              <input id="pass" type="password" required className="border-green-700 border-2 p-2 rounded"  placeholder="Your Password" onChange={(e)=>
           setpass(e.target.value) } />
            </div>
            {/* <div className="flex flex-col space-y-1.5">
              <Label htmlFor="id" className="text-green-700 font-semibold">Device ID</Label>
              <input id="id" type="number" required className="border-green-700 border-2 p-2 rounded"  placeholder="Device ID" onChange={(e)=>
           setdev(e.target.value) } />
            </div> */}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="pass" className="text-green-700 font-semibold">Location</Label>
              <input id="pass" type="text" required className="border-green-700 border-2 p-2 rounded"  placeholder="Your Location" onChange={(e)=>
           setloaction(e.target.value) } />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        
        <Button className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:text-green-700" onClick={handsum}>Submit</Button>
        
      </CardFooter>
      <CardDescription className="text-center mb-5">
      <p className="text-black">Are you new user?  <Link href="/" className="text-green-700 font-bold">Login</Link> </p>
      </CardDescription>
      </div>
      <Image src={farimg}
         alt="Farm Image"
         width={350}
         height={350}
         className="max-sm:hidden"
         />
    </Card>
    </div>
  )
}

export default signup;