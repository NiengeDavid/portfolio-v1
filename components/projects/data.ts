import { StaticImageData } from 'next/image';

import ajheadphones from './images/ajheadphones.png';
import dayspark from './images/dayspark.png';
import euphoria from './images/euphoria.png';
import project500 from './images/project500.png';


type ProjectType = {
    link: string
    title: string
    image: StaticImageData
    description?: string
}

export const data: ProjectType[] = [
    {
        image: dayspark,
        title: 'DaySpark 2.0',
        link: 'https://dayspark.netlify.app/',
        description:
            'DaySpark is a social media web application built with React and integrated with Sanity CMS, it uses Google OAuth to authenticate users and create their accounts. It allows users to share spontaneous moments from their day with friends, fostering connections through shared experiences.'
    },
    {
        image: ajheadphones,
        title: 'AJ Headphones - Ecommerce',
        link: 'https://ecommerce-one-pink.vercel.app/',
        description:
            'A fully functional ecommerce store bult with Nextjs, Reactjs, Typescript and Sanity CMS, with payments handled by Stripe. The store sells quality headphones and speakers for developers and gamers. Im still yet to decide what I want to do with it.'
    },
    {
        image: euphoria,
        title: 'Euphoria',
        link: 'https://theeuphoria.vercel.app/',
        description:
            'Euphoria is a daily devotional from Christ Family Ministries, by Rev. Arome Tokula. The web application makes these devotional available to thousands of people daily. Built with Nextjs, Reactjs, Typescript, Saas and Sanity CMS, fully SEO hooked for visibility.'
    },
    {
        image: project500,
        title: 'Dyslexia Project500',
        link: 'https://www.dyslexiaprojectafrica.com/',
        description:
            'A landing page for the Dyslexia project500, although pages have been adding up lately. It is a volunteer project I built for the team on the project. Built using Nextjs, Reactjs and Typescript, Emails and campaigns with Brevo.'
    }
]
