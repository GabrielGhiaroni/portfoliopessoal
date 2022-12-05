import React, {useState} from 'react';
import styles from './ScrollToTop.module.css';
import { BsArrowUpShort } from 'react-icons/bs';

const ScrollToTop = () => {

    const [botaoScroll, setBotaoScroll] = useState();
  
    const adicionarBotaoScroll = () => {
      if (window.scrollY >= 350) {
        setBotaoScroll([styles.scrollup, styles.showScroll].join(' '))
      } else {
        setBotaoScroll()
      }
    }

    window.addEventListener('scroll', adicionarBotaoScroll);
    
  return (
    <a href="#home" className={botaoScroll}>
        <BsArrowUpShort className={styles.scrollup__icon}/>
    </a>
  )
}

export default ScrollToTop;