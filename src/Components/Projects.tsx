import React from 'react'
import { projects } from './ProjectsFile'
import { useAppContext } from '../AppContext'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {AiFillGithub} from 'react-icons/Ai'
export default function Projects() {
    
    const {dispatch, seeMore} = useAppContext()
    
    function seeMoreProjects(){
        dispatch({
            type: 'setSeeMore',
            payload: {
                seeMorePayload: true
            }
        })
    }

    function seeLessProjects(){
        dispatch({
            type: 'setSeeMore',
            payload: {
                seeMorePayload: false
            }
        })
    }

    

    return (
        <div id='projects' className='p-4 md:px-10 xl:px-[10%] flex flex-col items-center'>
            <h2 className='text-center text-neutral-content my-10 text-5xl tracking-wide font-bold'>Projects</h2>
            <section className='md:grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-6'>
                {projects.map((project, index)=>{
                    return (
                        <div className={`mb-10 bg-secondary md:bg-secondary-focus text-accent-content overflow-hidden flex flex-col relative rounded-2xl ${!seeMore && index >=6 ? 'hidden' : ''}`}>
                            <AnimationOnScroll animateIn='animate__fadeIn'>
                                <div key={project.id} className=''>
                                    <div>
                                        <img 
                                            src={project.image}
                                            height='300 rounded-t-2xl '
                                        />
                                    </div>
                                    <div className='p-4'>
                                        <h3 className='text-base-300 font-bold text-2xl'>
                                            {project.name}
                                        </h3>
                                        <p className='font-semibold text-neutral-content mt-4'>{project.description}</p>
                                    </div>
                                    <div className='flex p-4 gap-2'>
                                        {project.techStack.map((tech, index)=>{
                                            return (
                                                <p key={index} className={`px-2 py-1 text-xs font-semibold text-neutral-content rounded-md bg-${index === 0 ? 'primary' : index===1 ? 'secondary' : index === 2 ? 'primary' :  'secondary'}`}>
                                                    {tech}
                                                </p>
                                            )
                                        })}
                                    </div>
                                    <div className='p-4 flex gap-3 items-center mt-auto'>
                                        <a href={project.liveLink} target='_blank' className='btn'><HiOutlineExternalLink /></a>
                                        <a href={project.github} target='_blank' className='btn'><AiFillGithub /></a>
                                    </div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    )
                })}
            </section>
            <button 
                onClick={()=>{
                    if(seeMore){
                        seeLessProjects()
                    } else {
                        seeMoreProjects()
                    }
                }} 
                className='btn bg-primary'
            >
                {`See ${seeMore ?'Less' : 'More'}`}
            </button>
        </div>
    )
}
