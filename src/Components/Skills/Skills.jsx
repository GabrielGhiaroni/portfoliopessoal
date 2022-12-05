import React from 'react';
import Backend from './Backend';
import Frontend from './Frontend';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id='skills' className={[styles.skills, "section"].join(' ')}>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Meus conhecimentos</span>

        <div className={[styles.skills__container, "container", "grid"].join(' ')}>
        <Frontend />
        <Backend />
        </div>
    </section>
  )
}

export default Skills;