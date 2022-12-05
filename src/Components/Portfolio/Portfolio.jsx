import React from 'react';
import styles from './Portfolio.module.css';
import Projetos from './Projetos';

const Portfolio = () => {
  return (
    <section id='portfolio' className={[styles.portfolio, "section"].join(' ')}>
        <h2 className="section__title">Portfólio</h2>
        <span className="section__subtitle">Meus últimos projetos</span>

        <Projetos />
    </section>
  )
}

export default Portfolio;