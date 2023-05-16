import React from 'react'

export default function Header() {
  return (
    <div id='header' className='fade-out mt-4 flex flex-col lg:flex-row-reverse items-center p-4 md:px-10 gap-6 xl:px-[10%]'>
        <img src='Aydot.jpg' className='max-w-[550px] w-full rounded-xl' alt='A picture of Ayomide Ibiteye'/>
        <div className='text-neutral-content'>
          <h1 className='mb-5 text-5xl font-bold'>Hi there</h1>
          <p className='mb-5 font-medium text-lg'>{`My name is Ayomide Ibiteye (Aydot), a frontend engineer and welcome to my corner of the internet! I'm a web developer with a passion for crafting clean and efficient code, and a love for all things tech. When I'm not busy building websites and applications, you can find me tinkering with new programming languages or daydreaming about my next big project. Thanks for stopping by!`}</p>
          <a href={`Ayomide's_Resume.docx.pdf`} download className='btn btn-primary'>CV/Resume</a>
        </div>
    </div>
  )
}
