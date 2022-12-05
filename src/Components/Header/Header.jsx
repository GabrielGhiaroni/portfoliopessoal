import React, { useState } from 'react';
import styles from './Header.module.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { BsCodeSlash, BsBriefcase } from 'react-icons/bs';
import { MdOutlineDesignServices, MdOutlineClose } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';




const Header = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <header id='header' className={styles.header}>
        <nav className={[styles.nav, "container"].join(' ')}>
            <a href="#home" className={styles.nav__logo}>
                Ghiaroni
            </a>

            <div className={toggle ? [styles.nav__menu, styles.show__menu].join(' ') : styles.nav__menu}>
                <ul className={[styles.nav__list, "grid"].join(' ')}>
                    <li className={styles.nav__item}>
                        <a href="#home" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <AiOutlineHome />
                            </i>
                            Home
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a href="#sobre" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <AiOutlineUser />
                            </i>
                            Sobre
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a href="#skills" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <BsCodeSlash />
                            </i>
                            Skills
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a href="#servicos" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <MdOutlineDesignServices />
                            </i>
                            Serviços
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a href="#portfolio" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <BsBriefcase />
                            </i>
                            Portfolio
                        </a>
                    </li>

                    <li className={styles.nav__item}>
                        <a href="#contato" className={styles.nav__link}>
                            <i className={[styles.nav__icon]}>
                                <BiMessageSquareDetail />
                            </i>
                            Contato
                        </a>
                    </li>
                </ul>   

                <i className={styles.nav__close}><MdOutlineClose onClick={() => setToggle(!toggle)}/></i>
            </div>
            
            <div className={styles.nav__toggle}>
                <div><AiOutlineMenu onClick={() => setToggle(!toggle)}/></div>
            </div>
        </nav>  
    </header>
  )
}

export default Header;