import React from 'react';
import styles from './Portfolio.module.css';
import { BsArrowRightShort } from 'react-icons/bs';

const ProjetosItens = ({item}) => {
  return (
    <div className={styles.projetos__card} key={item.id}>
        <img src={item.imagem} alt={item.titulo} className={styles.projetos__img}/>
        <h3 className={styles.projetos__titulo}>{item.titulo}</h3>
        <a href={item.url} target="__blank" className={styles.projetos__button}>
            Veja mais <BsArrowRightShort className={styles.projetos__buttonIcon}/>
        </a>
    </div>
  )
}

export default ProjetosItens;