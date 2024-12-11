import { Backend, CMS, DevOps, Frontend, SkillsType, Testing } from '@/data/skills'

export type RoleSkillsType = {
    area: string
    stack: SkillsType[]
}

export type ExperienceType = {
    period: string[]
    role: string
    duties: string
    skills?: RoleSkillsType[]
}

export const experience: ExperienceType[] = [
    {
        period: ['11/01/2021'],
        role: 'Frontend Developer - WOMOC',
        duties: 'Developed scalable, modular components for the client applications using modern architectural patterns. Designed solutions for key functions such as client-server interactions, REST API integration, and service integrations. Implemented automatic UI tests (unit and integration) to enhance solution quality. Optimized application architecture, including authentication, logging, and data processing. Collaborated with the UI/UX team to enhance UI components and improve application usability.',
        skills: [
            {
                area: 'Frontend',
                stack: [
                    Frontend.JavaScript,
                    Frontend.TypeScript,
                    Frontend.React,
                    Frontend.NextJS,
                    //Frontend.SASS,
                    Frontend.TailwindCSS
                ]
            },
            {
                area: 'Backend',
                stack: [Backend.RestAPI, Backend.Python, Backend.PostgreSQL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Docker, DevOps.Git, DevOps.Jenkins, DevOps.Linux, DevOps.GitHubActions]
            }
        ]
    },
    {
        period: ['02/07/2024', '09/05/2024'],
        role: 'Software Engineer - Presidency (FGNPC - PPI)',
        duties: 'Led the full redesign development cycle of WordPress site for media publication, creating scalable solutions for high-traffic demands. Designed custom PHP modules, optimized MySQL databases, and implemented performance enhancements to ensure reliability. Provided technical support, developed SEO strategies, and integrated social media modules for streamlined content distribution. Additionally, I designed user-friendly WordPress themes, enhancing both functionality and user experience.',
        skills: [
            {
                area: 'Frontend',
                stack: [Frontend.JavaScript, Frontend.jQuery, Frontend.TypeScript, Frontend.HTML, Frontend.CSS]
            },
            {
                area: 'Backend',
                stack: [Backend.PHP, Backend.MySQL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Git]
            },
            {
                area: 'CMS',
                stack: [CMS.WordPress]
            }
        ]
    },
    {
        period: ['05/01/2024', '12/01/2024'],
        role: 'Software Engineer Intern - eHealth Africa',
        duties: 'Collaborated on Web application solutions for public health systems. Created a scalable productivity app for healtheir work experience using the pomodoro technique of task management. Worked with different teams from development to QA, DevOps, Programs, and Project Management and other cross-functional teams.',
        skills: [
            {
                area: 'Frontend',
                stack: [
                    Frontend.JavaScript,
                    Frontend.TypeScript,
                    Frontend.React,
                    Frontend.NextJS,
                    Frontend.TailwindCSS,
                    Frontend.Bootstrap
                ]
            },
            {
                area: 'Backend',
                stack: [Backend.RestAPI, Backend.NodeJS, Backend.Python, Backend.PostgreSQL, Backend.MySQL]
            },
            {
                area: 'CI/CD & DevOps',
                stack: [DevOps.Git, DevOps.Jenkins, DevOps.Linux, DevOps.Docker]
            }
        ]
    }
]
