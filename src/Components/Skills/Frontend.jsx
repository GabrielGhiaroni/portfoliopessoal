import React from 'react';
import styles from './Skills.module.css';
import { HiOutlineBadgeCheck } from 'react-icons/hi';

const Frontend = () => {
  return (
    <div className={styles.skills__content}>
        <h3 className={styles.skills__title}>Front-end Developer</h3>

        <div className={styles.skills__box}>
            <div className={styles.skills__group}>
                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>HTML</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>CSS</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>JavaScript</h3>
                </div>

                <div className={styles.skills__data}>
                    <HiOutlineBadgeCheck className={styles.skills__icon}/>
                    <h3 className={styles.skills__name}>React.js</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend;