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
    <div className='flex mt-8 mx-4 p-4 gap-5 bg-gray-100 rounded-lg shadow-md max-w-screen-lg'>
        <div>
        <Avatar>
        <AvatarImage src={imgSrc} />
        <AvatarFallback>M</AvatarFallback>
        </Avatar>
        </div>

        <div>
        <div className='flex flex-col mb-4'>
            <h2 className="text-2xl font-bold ">{name}</h2>
            <div className="flex gap-2 items-center ">
            <p className="text-base">Gender:</p>
            <p className="text-base">{gender}</p>
            </div>
        </div>

        <div className='grid grid-cols-1 gap-3 md:grid-cols-2'> 
        <div className='flex flex-col'>
            <h2 className="text-2xl font-bold mb-1">Demographic</h2>
            <div className="flex gap-2 items-center ">
            <p className="text-lg font-bold ">Age:</p>
            <p className="text-lg">{age}</p>
            </div>
            <div className="flex gap-2 items-center ">
            <p className="text-lg font-bold ">Ocupation:</p>
            <p className="text-lg">{ocupation}</p>
            </div>
            <div className="flex gap-2 items-center ">
            <p className="text-lg font-bold ">Location:</p>
            <p className="text-lg">{location}</p>
            </div>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="text-2xl font-bold mb-1">Bio</h2>
            <p className="text-lg">
                {bio}
            </p>
        </div>

        <div className='flex flex-col mt-2'>
            <h2 className="text-2xl font-bold mb-1">Goals</h2>
            <p className="text-lg">
                {goals}
            </p>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="text-2xl font-bold mb-1">Pain Points</h2>
            <p className="text-lg">
                {painpoints}
            </p>
        </div>

        <div className='flex flex-col mt-2'>
            <h2 className="text-2xl font-bold mb-1">Motivation</h2>
            <p className="text-lg">
                {motivation}
            </p>
        </div>
        <div className='flex flex-col mt-2'>
            <h2 className="text-2xl font-bold mb-1">Preferences</h2>
            <p className="text-lg">
                {preferences}
            </p>
        </div>
        </div>

        </div>
    </div>
  )
}
