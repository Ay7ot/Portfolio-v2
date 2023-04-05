import React from 'react'
import { stacks } from './stack'

export default function TechStack() {
  return (
    <div id='techstack' className='p-4 md:px-10 xl:px-[10%] mb-6'>
            <h2 className='text-center text-neutral-content my-10 text-5xl tracking-wide font-bold'>TechStack</h2>
            <div className='bg-secondary pbn-6 md:mx-20 mx-auto px-5 rounded-2xl py-5'>
               {stacks.map(stack=>{
                return (
                    <a href={stack.href}>
                        <img 
                            className='w-14 mt-5 md:w-20 ml-4 inline'
                            alt={`picture of ${stack.name}`}
                            src={stack.image}
                        />
                    </a>
                )
               })}
            </div>
        </div>
  )
}
