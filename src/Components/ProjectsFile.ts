import { nanoid } from "nanoid";
import { ProjectType } from "../Types/types";

export const projects: ProjectType[] = [
    {
        name: 'ProTaskMate',
        id: nanoid(),
        description: 'A task Management web app that applies the kanban methodology to sort tasks. Deployed as a full stack application with firebase for the database, hosting and user authentication.',
        github: 'https://github.com/Ay7ot/protaskmate/',
        liveLink: 'https://protaskmate.web.app',
        image: 'protaskmate.png',
        techStack: ['React', 'TypeScript', 'Firebase', 'TailwindCSS']
    },
    {
        name: 'Chatty',
        id: nanoid(),
        description: 'Chatty is an AI chat assistant that is always ready to help with all your questions.',
        github: 'https://github.com/Ay7ot/chatty',
        liveLink: 'https://chattyai.web.app/',
        image: 'chatty.png',
        techStack: ['React', 'TypeScript', 'OpenaiAPI', 'TailwindCSS']
    },
    {
        name: 'MoviePitch',
        id: nanoid(),
        description: 'A simple AI web app done with openaiAPI. Users would input a single sentence for a movie and they would get back a movie title, synopsis, actors and even a poster.',
        github: 'https://github.com/Ay7ot/moviePitch',
        liveLink: 'https://movie-synopsis.netlify.app/',
        image: 'moviePitch.jpg',
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'OpenaiAPI']
    },{
        name: 'BookWormz',
        id: nanoid(),
        description: 'An open book library where users can search for books, read books, download and download them.',
        github: 'https://github.com/Ay7ot/bookwormz',
        liveLink: 'https://bookwormz.netlify.app',
        image: 'bookWormz.png',
        techStack: ['React', 'JavaScript', 'ContextAPI', 'dbooksAPI']
    },
    {
        name: 'Musica',
        id: nanoid(),
        description: 'A music web app built with SpotifyAPI. Users can sign in with their spotify account, search for an artist and play songs from the artist. Built to practice handling api calls and advanced React',
        github: 'https://github.com/Ay7ot/musica-typescript',
        liveLink: 'https://dot-musica.netlify.app',
        image: 'aydot-musica.png',
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'SpotifyAPI']
    },
    {
        name: 'Food ways',
        id: nanoid(),
        description: 'A UI for a food delivery service made to practice working with react components and basic state properties',
        github: 'https://github.com/Ay7ot/food-ways',
        liveLink: 'https://food-ways.netlify.app',
        image: 'food-ways.png',
        techStack: ['React', 'JavaScript', 'Animation-on-scroll']
    },
    {
        name: 'Trivia',
        id: nanoid(),
        description: 'A trivia web app built after completing the react course on the scrimba platform.',
        github: 'https://github.com/Ay7ot/spandors-trivia',
        liveLink: 'https://spandors-trivia.netlify.app',
        image: 'spandors-trivia.png',
        techStack: ['React', 'JavaScript', 'VanillaCSS']
    },
    {
        name: 'Tenzie Game',
        id: nanoid(),
        description: 'A tenzie web based browser game built to practice basic react state. Players roll the dice until its all the same number on all available dies. Best time and no. of rolls are saved to local storage.',
        github: 'https://github.com/Ay7ot/tenzie',
        liveLink: 'https://spandors-tenzie.netlify.app',
        image: 'spandors-tenzie.png',
        techStack: ['React', 'JavaScript', 'VanillaCSS']
    },
    {
        name: 'Tick Tasks',
        id: nanoid(),
        description: 'A small to-do web app made to practice working with firebase database and authentication services. Users can sign in and perform basic CRUD operations with their tasks.',
        github: 'https://github.com/Ay7ot/firebase-database',
        liveLink: 'https://tick-tasks.netlify.app',
        image: 'tickTasks.png',
        techStack: ['React', 'TypeScript', 'TailwindCSS', 'Firebase']
    },
    
]