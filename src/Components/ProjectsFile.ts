import { nanoid } from "nanoid";
import { ProjectType } from "../Types/types";

export const projects: ProjectType[] = [
    {
        name: 'ProTaskMate',
        id: nanoid(),
        description: 'A task Management web app that applies the kanban methodology to sort tasks. Deployed as a full stack appllication with firebase for the database, hosting and user authentication. Built using Reactjs, Typescript, Firebase, TailwindCSS and ContextAPI',
        github: 'https://github.com/Ay7ot/protaskmate/',
        liveLink: 'https://protaskmate.web.app',
        image: 'protaskmate.png'
    },
    {
        name: 'Musica',
        id: nanoid(),
        description: 'A music web app built with SpotifyAPI. Users can sign in with their spotify account, search for an artist and play songs from the artist. Built using Reactjs, Typescript, SpotifyAPI, TailwindCSS and was built to practice handling api calls and advanced React',
        github: 'https://github.com/Ay7ot/musica-typescript',
        liveLink: 'https://dot-musica.netlify.app',
        image: 'aydot-musica.png'
    },
    {
        name: 'Trivia',
        id: nanoid(),
        description: 'A trivia web app built after completing the react course on the scrimba platform. Built with Reactjs, VanillaCSS and OpenDB trivia api',
        github: 'https://github.com/Ay7ot/spandors-trivia',
        liveLink: 'https://spandors-trivia.netlify.app',
        image: 'spandors-trivia.png'
    },
    {
        name: 'Tenzie Game',
        id: nanoid(),
        description: 'A tenzie web based browser game built to practice basic react state. Players roll the dice until its all the same number on all available dies. Best time and no. of rolls are saved to local storage. Built with Reactjs, VanillaCSS and Javascript',
        github: 'https://github.com/Ay7ot/tenzie',
        liveLink: 'https://spandors-tenzie.netlify.app',
        image: 'spandors-tenzie.png'
    },
    {
        name: 'Tick Tasks',
        id: nanoid(),
        description: 'A small to-do web app made to practice working with firebase database and authentication services. Users can sign in and perform basic CRUD operations with their tasks. Built with Reactjs, Typescript, Firebase, TailwindCSS and ContextAPI',
        github: 'https://github.com/Ay7ot/firebase-database',
        liveLink: 'https://tick-tasks.netlify.app',
        image: 'tickTasks.png'
    },
    {
        name: 'Food ways',
        id: nanoid(),
        description: 'A UI for a food delivery service made to practice working with react components and basic state properties',
        github: 'https://github.com/Ay7ot/food-ways',
        liveLink: 'https://food-ways.netlify.app',
        image: 'food-ways.png'
    }
]