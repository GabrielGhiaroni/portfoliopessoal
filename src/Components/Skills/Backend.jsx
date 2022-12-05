import React from 'react';
import styles from './Skills.module.css';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Backend = () => {
  return (
    <div className={styles.skills__content}>
        <h3 className={styles.skills__title}>Back-end Developer</h3>

        <div className={styles.skills__box}>
            <div className={styles.skills__group}>

            <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>JavaScript</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>Node.js</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>PostgreSQL</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>APIs REST</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Backend;