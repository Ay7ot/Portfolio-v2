import React from 'react'
import {nanoid} from 'nanoid'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Contact() {
    
    const socials = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/ayomide-ibiteye-b124b823b/',
            id: nanoid()
        },
        {
            name: 'GitHub',
            url: 'https://github.com/Ay7ot',
            id: nanoid()
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/ayomidotzee',
            id: nanoid()
        },
        {
            name: 'Twitter',
            url: 'https://twitter.com/Ay7ot',
            id: nanoid()
        },
    ]
    
    return (
        <div id='contact' className='py-20'>
            <h2 className='text-center text-neutral-content my-10 text-5xl tracking-wide font-bold'>Contact</h2>
            <div className=' flex flex-col items-center pb-6 md:mx-28 mx-4 p-5 rounded-2xl bg-base-100  '>
                <p>Open to new and exciting oportunities in the tech space. I'm Looking forward to connect with like and unlike minds. You can reach out to me and say hi. I'll definitely respond.</p>
                <a href='mailto:ayomidotzee@gmail.com' className='mt-6 btn btn-primary'>
                    Send a Message
                </a>  
                <ul className='flex gap-6 items-center mt-6 justify-between'>    
                    {socials.map(item=>{
                        return (
                            <a href={item.url} key={item.id} className='btn'>
                            {item.name==='LinkedIn' ? <FaLinkedin /> :item.name === 'GitHub' ? <FaGithub /> : item.name === 'Instagram' ? <FaInstagram /> : item.name === 'Twitter' ? <FaTwitter /> : <></>}  
                            </a>
                        )
                    })}
                </ul> 
            </div>
        </div>
    )
}
