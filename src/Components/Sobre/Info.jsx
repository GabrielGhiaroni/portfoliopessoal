import React from 'react';
import styles from './Sobre.module.css';
import { FiAward } from 'react-icons/fi';
import { BsBriefcase } from 'react-icons/bs';
import { FaRegHandshake } from 'react-icons/fa';

const Info = () => {
  return (
    <div className={[styles.sobre__info, "grid"].join(' ')}>
        <div className={styles.sobre__box}>
            <FiAward className={styles.sobre__icon}/>
            <h3 className={styles.sobre__titulo}>Experiência</h3>
            <span className={styles.sobre__subtitulo}>2 anos</span>
        </div>
        <div className={styles.sobre__box}>
            <BsBriefcase className={styles.sobre__icon}/>
            <h3 className={styles.sobre__titulo}>Projetos</h3>
            <span className={styles.sobre__subtitulo}>+10</span>
        </div>
        <div className={styles.sobre__box}>
            <FaRegHandshake className={styles.sobre__icon}/>
            <h3 className={styles.sobre__titulo}>Clientes</h3>
            <span className={styles.sobre__subtitulo}>2</span>
        </div>
    </div>
  )
}

export default Info;