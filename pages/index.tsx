import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import About from '@/components/about'
import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import Introduce from '@/components/introduce'
import StarField from '@/components/star-field'

const GithubActivity = dynamic(() => import('@/components/github-activity'), { ssr: false })

const MainPage: React.FC = () => (
    <>
        <NextSeo
            title={'Hi, Im David - Programmer, Engineer and Dreamer'}
            description={
                'I am a software engineer specializing in frontend and backend development for scalable web applications. With extensive experience in application development, testing, and managing both development teams and projects, I am focused on delivering high-quality and efficient solutions.'
            }
            openGraph={{
                images: [
                    {
                        height: 1333,
                        url: 'https://davidnienge.com.ng/avatar.jpg',
                        width: 1000
                    }
                ],
                locale: 'en-US',
                siteName: 'davidnienge.com.ng'
            }}
        />

        <StarField
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor={'black'}
        />

        <Introduce />

        <About />

        <GithubActivity />

        <section className={'footerLinks'}>
            <Link
                href={'/projects'}
                title={'View my pet projects'}
            >
                {'Projects'}
                <Icon name={iconNames.right} />
            </Link>
        </section>
    </>
)

export default MainPage
