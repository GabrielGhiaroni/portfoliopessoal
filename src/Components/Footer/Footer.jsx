import React from 'react';
import styles from './Footer.module.css';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id='footer' className={styles.footer}>
        <div className={[styles.footer__container, "container"].join(' ')}>
            <a href="#home"><h1 className={styles.footer__title}>Ghiaroni</h1></a>
        

            <ul className={styles.footer__list}>
                <li>
                    <a href="#sobre" className={styles.footer__link}>Sobre</a>
                </li>
                <li>
                    <a href="#servicos" className={styles.footer__link}>Serviços</a>
                </li>

                <li>
                    <a href="#portfolio" className={styles.footer__link}>Portfolio</a>
                </li>

                <li>
                    <a href="#Contato" className={styles.footer__link}>Contato</a>
                </li>
            </ul>

            <div className={styles.footer__social}>
                <a href="https://www.linkedin.com/in/gabrielghiaroni/" className={styles.footer__socialLink} target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
                <a href="https://api.whatsapp.com/send?phone=5521983617775" className={styles.footer__socialLink} target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
                <a href="https://github.com/GabrielGhiaroni" className={styles.footer__socialLink} target="_blank" rel="noreferrer noopener"><FiGithub /></a>
            </div>

            <span className={styles.footer__copy}>&#169; Gabriel Ghiaroni. Todos os direitos reservados.</span>
        </div>
    </footer>
  )
}

export default Footer;