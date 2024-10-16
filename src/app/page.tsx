'use client'
import Image from "next/image";
import {InputForm} from '@/app/SubmitionForm'
import { useEffect, useState } from "react";
import { parsePersona } from '@/lib/parsePersona'
import PersonasCard from "@/components/ui/personasCard";
import {Persona} from '@/lib/parsePersona'
import { avatarGenerator } from "@/lib/ramdomAvatar";

export default function Home() {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    fetchPersonas();
  }, []);

  const fetchPersonas = async () => {
    const res = await fetch('/api/personaslist');
    const data = await res.json();
    setPersonas(data.data);
  };

  const handleResponse = async (message: string) => {
    const parsedPersona = parsePersona(message);
    
    await fetch('/api/personaslist', {
      method: 'POST',
      body: JSON.stringify(parsedPersona)
    });

    
    fetchPersonas();
  };

  return (
    <div className="flex items-center justify-center min-h-screen  px-2 pb-20 pt-8 gap-16 ">
     <main className="flex flex-col items-center">
     <div className="flex-shrink-0 flex items-center mb-8">
        <Image src={'/personasAvatar.png'} width={200} height={80} alt='avatares'/>
      </div>
      <h1 className="text-4xl font-bold text-center mb-4 max-w-3xl">Dive into the minds of your target audience with personas that feel like real people.</h1>
      <p className="font-light text-gray-500 sm:text-xl max-w-3xl mb-8">
     User personas serve as powerful tools for creating products and services that meet the needs and expectations of your target audience effectively.
      </p>
      <InputForm onResponse={handleResponse }/>
      <div className="my-8" >
      {personas && personas.map((persona) => (
              <PersonasCard
                key={persona.id}
                imgSrc={avatarGenerator(persona.gender)}
                name={persona.name}
                gender={persona.gender}
                age={persona.age}
                ocupation={persona.occupation}
                location={persona.location}
                bio={persona.bio}
                goals={persona.goals}
                painpoints={persona.painpoints}
                motivation={persona.motivation}
                preferences={persona.preferences}
              />
            ))}
        </div>
        <section className="mt-8">
          <h1 className="sm:text-xl font-bold mb-1 max-w-3xl text-violet-800">What is a Persona?</h1>
          <p className="sm:text-xl max-w-3xl">A persona is a fictional representation of a specific type of person, 
            often used in various fields such as marketing, user experience (UX) design, writing, 
            and psychology. The concept is designed to help creators or decision-makers understand and empathize with the target audience or user.</p>
        </section>
        <section className=" my-4">
          <h1 className="sm:text-xl font-bold mb-1 max-w-3xl text-violet-800">AI Tool?</h1>
          <p className="sm:text-xl max-w-3xl">Harness the cutting-edge power of Artificial Intelligence to streamline your creative process.
          Save time and energy while generating high-quality assets that drive results.</p>
        </section>
     </main>
    </div>
  );
}
