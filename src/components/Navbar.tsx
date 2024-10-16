import React from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
                
            <Image src={'/personaLogo.png'} width={140} height={40} alt='logo'/>
            </div>
          </div>
          <div className="flex items-center">
            <Button className="bg-violet-800 hover:bg-violet-950"> <Link  href="../#personaform" >   Try for free </Link ></Button>
          </div>
        </div>
      </div>
    </nav>
  )
}