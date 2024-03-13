'use client'
import * as React from "react"
import Swal from 'sweetalert2'
import Image from 'next/image';
import Link from "next/link";
import farmimg from './assests/logfarm.jpg'
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
import { useRouter } from 'next/navigation'
import { Label } from "@/components/ui/label"
import axios from "axios";

const login = () => {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');

  const router = useRouter()

  const handsum = (e) => {
    e.preventDefault();
    if (email === "" || pass === "") {
      Swal.fire({
        title: 'Invalid Login!',
        text: 'Enter Correct Email and Password',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
    else {
      axios.post('http://localhost:3000/api/auth/login', { email, pass })
        .then((res) => {
          if (res.data == null) {
            console.log("err")
            Swal.fire({
              title: 'Invalid Login!',
              text: 'Enter Correct Email and Password',
              icon: 'error',
              confirmButtonText: 'OK'
            })
          }
          else {
            Swal.fire({
              icon: "success",
              title: "Login Sucessfully",
              showConfirmButton: false,
              timer: 1500
            });
            router.push(`/home/${res.data.id}`);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
     
      <Card className=" border-green-700 border-2 flex  ">
        <Image src={farmimg}
          alt="Farm Image"
          width={300}
          height={350}
          className="max-sm:hidden" />
        <div>
          <CardHeader>
            <CardTitle className="text-center text-green-700">Login Page</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="mx-5" >
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="text-green-800 font-semibold">Email</Label>
                  <input id="email" type="email" className="border-green-700 border-2 p-2 rounded" required placeholder="Your Email" onChange={(e) =>
                    setemail(e.target.value)} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="pass" className="text-green-700 font-semibold">Password</Label>
                  <input id="pass" type="password" className="border-green-700 border-2 p-2 rounded" required placeholder="Your Password" onChange={(e) =>
                    setpass(e.target.value)} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="bg-green-700 hover:bg-white hover:border-2 hover:border-green-700 hover:text-green-700" onClick={handsum}>Submit</Button>
          </CardFooter>
          <CardDescription className="text-center mb-5">
            <p className="text-black">Are you new user?  <Link href="/signup" className="text-green-700 font-bold">Signup</Link> </p>
          </CardDescription>
        </div>
      </Card>
    </div>
  )
}

export default login;
