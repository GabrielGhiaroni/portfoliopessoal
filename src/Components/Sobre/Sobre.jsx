import React from 'react';
import styles from './Sobre.module.css';
import FotoSobre from '../../Assets/profile-sobre.jpeg';
import Info from './Info';

const Sobre = () => {
  return (
    <section id='sobre' className={[styles.sobre, "section"].join(' ')}>
        <h2 className="section__title">Sobre mim</h2>
        <span className="section__subtitle">Introdução</span>

        <div className={[styles.sobre__container, "container", "grid"].join(' ')}>
            <img src={FotoSobre} className={styles.sobre__img} alt="foto-perfil" />

            <div className={styles.sobre__data}>
                <Info />

                <p className={styles.sobre__description}>Fullstack Developer trabalhando como freelancer. Confira meu portfólio em meu site oficial, através do botão abaixo.</p>
                <a href="https://gabrielghiaroni.com/" className="button button--flex" target="_blank" rel="noreferrer noopener">Acessar meu site oficial
                </a>
            </div>
        </div>

    </section>
  )
}

export default Sobre;