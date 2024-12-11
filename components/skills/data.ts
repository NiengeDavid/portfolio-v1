type SkillItemType = {
    name: string
    level: number
}

type SkillGroupType = {
    group: string
    skills: SkillItemType[]
}

export const data: SkillGroupType[] = [
    {
        group: 'Frontend',
        skills: [
            {
                name: 'TypeScript',
                level: 80
            },
            {
                name: 'React, Next.js',
                level: 90
            },
            {
                name: 'TailwindCSS',
                level: 86
            },
            {
                name: 'ESLint & Prettier',
                level: 79
            }
        ]
    },
    {
        group: 'Backend',
        skills: [
            {
                name: 'Node.js',
                level: 85
            },
            {
                name: 'PHP',
                level: 40
            },
            {
                name: 'Python',
                level: 50
            },
            {
                name: 'SQL',
                level: 60
            }
        ]
    },
    {
        group: 'CMS',
        skills: [
            {
                name: 'Sanity',
                level: 90
            },
            {
                name: 'Strappi',
                level: 80
            },
            {
                name: 'Contentful',
                level: 80
            }
        ]
    },
    {
        group: 'DevOps',
        skills: [
            {
                name: 'Docker',
                level: 60
            },
            {
                name: 'Git',
                level: 90
            },
            {
                name: 'Linux',
                level: 70
            }
        ]
    }
]
