import React from 'react'

import styles from './styles.module.sass'

import { Backend, DevOps, Frontend, Testing, CMS } from '@/data/skills'

const SkillsCloud: React.FC = () => (
    <section>
        <ul className={styles.tagsCloud}>
            {[
                ...Object.values(Frontend),
                ...Object.values(Backend),
                //...Object.values(Testing),
                ...Object.values(DevOps),
                ...Object.values(CMS)
            ].map((item, i) => (
                <li key={`cloud-item-${i}`}>{item}</li>
            ))}
        </ul>
    </section>
)

export default SkillsCloud
