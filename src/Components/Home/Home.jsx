import React from 'react';
import styles from './Home.module.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section id='home' className={[styles.home, "section"].join(' ')}>
        <div className={[styles.home__container, "container", "grid"].join(' ')}>
            <div className={[styles.home__content, "grid"].join(' ')}>
                <Social />
                <div className={styles.home__img}></div>
                <Data />
            </div>
            
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home;