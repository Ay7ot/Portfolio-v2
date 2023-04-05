import React from 'react'
import { projects } from './ProjectsFile'

export default function Projects() {
    
    return (
        <div id='projects' className='p-4 md:px-10 xl:px-[10%]'>
            <h2 className='text-center text-neutral-content my-10 text-4xl tracking-wide font-semibold'>Projects</h2>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6'>
                {projects.map(project=>{
                    return (
                        <div className='mb-10 bg-secondary md:bg-secondary-focus text-accent-content flex flex-col overflow-hidden relative rounded-2xl'>
                            <div>
                                <img 
                                    src={project.image}
                                    height='300'
                                />
                            </div>
                            <div className='p-4'>
                                <h3 className='text-base-300 font-bold text-2xl'>
                                    {project.name}
                                </h3>
                                <p className='text-lg font-semibold text-neutral-content mt-4'>{project.description}</p>
                            </div>
                            <div className='p-4 flex gap-3 items-center'>
                                <a href={project.liveLink} target='blank' className='btn btn-accent'>Live Link</a>
                                <a href={project.github} target='blank' className='btn btn-accent'>GitHub</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
