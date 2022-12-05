import React from 'react';
import styles from './Home.module.css';
import { BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

const Social = () => {
  return (
    <div className={styles.home__social}>
        <a href="https://www.linkedin.com/in/gabrielghiaroni/" className={styles.home__socialIcon} target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
        <a href="https://api.whatsapp.com/send?phone=5521983617775" className={styles.home__socialIcon} target="_blank" rel="noreferrer noopener"><BsWhatsapp /></a>
        <a href="https://github.com/GabrielGhiaroni" className={styles.home__socialIcon} target="_blank" rel="noreferrer noopener"><FiGithub /></a>
    </div>
  )
}

export default Social;