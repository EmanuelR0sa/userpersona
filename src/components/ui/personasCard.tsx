import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

export default function PersonasCard({
    imgSrc, 
    name, 
    gender,
    age, 
    ocupation, 
    location, 
    bio, 
    goals, 
    painpoints,
    motivation,
    preferences,
}:
{
    imgSrc:string 
    name:string, 
    gender:string,
    age:string, 
    ocupation:string, 
    location:string, 
    bio:string, 
    goals:string, 
    painpoints:string,
    motivation:string,
    preferences:string,
    }) {
  return (
    <div className='flex mt-8 mx-4 sm:mx-0 sm:p-4 md:p-8 gap-5 bg-gray-100 rounded-lg shadow-md max-w-screen-lg'>
        <div>
        <Avatar>
        <AvatarImage src={imgSrc} />
        <AvatarFallback>M</AvatarFallback>
        </Avatar>
        </div>

        <div>
        <div className='flex flex-col mb-4'>
            <h2 className="sm:text-xl font-bold ">{name}</h2>
            <div className="flex gap-2 items-center ">
            <p className="text-base">Gender:</p>
            <p className="text-base">{gender}</p>
            </div>
        </div>

        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'> 
        <div className='flex flex-col'>
            <h2 className="sm:text-xl font-bold mb-1">Demographic</h2>
            <div className="flex gap-2 items-center ">
            <p className="sm:text-xl font-bold ">Age:</p>
            <p className="sm:text-xl">{age}</p>
            </div>
            <div className="flex gap-2 items-center ">
            <p className="sm:text-xl font-bold ">Ocupation:</p>
            <p className="sm:text-xl">{ocupation}</p>
            </div>
            <div className="flex gap-2 items-center ">
            <p className="sm:text-xl font-bold ">Location:</p>
            <p className="sm:text-xl">{location}</p>
            </div>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="sm:text-xl font-bold mb-1">Bio</h2>
            <p className="sm:text-xl">
                {bio}
            </p>
        </div>

        <div className='flex flex-col mt-2'>
            <h2 className="sm:text-xl font-bold mb-1">Goals</h2>
            <p className="sm:text-xl">
                {goals}
            </p>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="sm:text-xl font-bold mb-1">Pain Points</h2>
            <p className="sm:text-xl">
                {painpoints}
            </p>
        </div>

        <div className='flex flex-col mt-2'>
            <h2 className="sm:text-xl font-bold mb-1">Motivation</h2>
            <p className="sm:text-xl">
                {motivation}
            </p>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="sm:text-xl font-bold mb-1">Preferences</h2>
            <p className="sm:text-xl">
                {preferences}
            </p>
        </div>
        </div>

        </div>
    </div>
  )
}
