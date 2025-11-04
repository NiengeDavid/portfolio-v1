import React from 'react'
import Image from 'next/image'

import photo from './photo.png'
import styles from './styles.module.sass'

/**
 * The About component displays information about the developer, including a photo and a brief description.
 *
 * @component
 * @example
 * return (
 *   <About />
 * )
 */
export const About: React.FC = () => {
    return (
        <section className={styles.aboutSection}>
            <h2 className={'pageTitle'}>{'About me'}</h2>
            <div className={styles.aboutContainer}>
                <Image
                    src={photo}
                    alt={'Photo of me'}
                />
                <div>
                    <p>
                        {
                            'Programming is both my profession and my hobby, which is why I truly enjoy my work as a developer. With over 4 years of experience, I have the skills to tackle a wide range of challenges, from building interactive web applications to leading development teams.'
                        }
                    </p>
                    <p>
                        {
                            'I currently work as the lead software engineer at Syntax Labs. I volunteer at WOMOC (World Media Outreach Center) as a software engineer(remote) and previously, I worked at eHealth Africa and the presidency(FGNPC), both as a fullstack software engineer. Outside work, I spend my time gaming, taking long naps, and sharing algorithms/discoveries on Instagram.'
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About
