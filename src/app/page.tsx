'use client'
import Image from "next/image";
import {InputForm} from '@/app/SubmitionForm'
import { useState } from "react";

export default function Home() {
  const [responseMessage, setResponseMessage]= useState<string | null>(null);

  const handleResponse=(message: string)=>{
    setResponseMessage(message);
  }

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
     <main className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-4 max-w-3xl">Dive into the minds of your target audience with personas that feel like real people.</h1>
      <p className="font-light text-gray-500 sm:text-xl max-w-3xl">
     User personas serve as powerful tools for creating products and services that meet the needs and expectations of your target audience effectively.
      </p>
      <InputForm onResponse={handleResponse }/>
      {responseMessage && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md w-full">
            <h2 className="text-2xl font-bold mb-4">Generated Persona:</h2>
            <p className="whitespace-pre-wrap">{responseMessage}</p>
          </div>
        )}
     </main>
    </div>
  );
}
