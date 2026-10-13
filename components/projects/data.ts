import { StaticImageData } from 'next/image'

import ajheadphones from './images/ajheadphones.png'
import autoconsult from './images/autoconsult.png'
import dayspark from './images/dayspark.png'
import euphoria from './images/euphoria.png'

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
        image: autoconsult,
        title: 'AutoConsult',
        link: 'https://autoconsult.ng',
        description:
            'AutoConsult (AJAC) is an automobile consulting company located in Abuja, Nigeria, with a vision of making life easy for every Automobile user, I dsigned and built their website to automate their processes and showcase their portfolio and media. Built using Nextjs, Reactjs, Typescript, and SanityCMS, Emails and campaigns with Brevo, Payments with Paystack, and fully SEO hooked for visibility.'
    }
]
