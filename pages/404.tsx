import React from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'

import styles from '@/styles/404.module.sass'

import Icon from '@/components/icon'
import { iconNames } from '@/components/icon/types'
import StarField from '@/components/star-field'

const NotFoundPage: React.FC = () => (
    <>
        <NextSeo
            title={'404 - Page Not Found'}
            description={'The page you are looking for does not exist.'}
            noindex={true}
        />

        <StarField
            starCount={1000}
            starColor={[255, 255, 255]}
            speedFactor={0.05}
            backgroundColor={'black'}
        />

        <section className={styles.notFoundSection}>
            <h1 className={styles.code}>{'404'}</h1>
            <h3 className={styles.title}>{'Page not found'}</h3>
            <p className={styles.description}>
                {'The page you’re looking for doesn’t exist or may have been moved.'}
            </p>

            <div className={'footerLinks'}>
                <Link
                    href={'/'}
                    title={'Return to home'}
                >
                    <Icon name={iconNames.left} />
                    {'Back to Home'}
                </Link>
            </div>
        </section>
    </>
)

export default NotFoundPage
