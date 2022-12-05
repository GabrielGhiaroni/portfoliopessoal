import React, {useEffect, useState} from 'react';
import styles from './Portfolio.module.css';
import { projetosData } from './Data';
import { projetosNav } from './Data';
import ProjetosItens from './ProjetosItens';

const Projetos = () => {
    const [item, setItem] = useState({nome: "todos"});
    const [projetos, setProjetos] = useState([]);
    const [ativo, setAtivo] = useState(null);

    useEffect(() => {
        if (item.nome === "todos") {
            setProjetos(projetosData);
        }
        else {
            const novosProjetos = projetosData.filter(projeto => {
                return projeto.categoria === item.nome;
            });
            setProjetos(novosProjetos);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({nome: e.target.textContent});
        setAtivo(index);
    }

  return (
    <>
        <div className={styles.projetos__filtros}>
            {projetosNav.map((item, index) => {
                return (
                    <span className={`${ativo === index ? [styles.projetos__navAtiva, styles.projetos__item].join(' ') : styles.projetos__item}`} onClick={(e) => {handleClick(e, index)}} key={index}>
                        {item.nome}
                    </span>
                )
            })}
        </div>

        <div className={[styles.projetos__container, "container", "grid"].join(' ')}>
            {projetos.map((item) => {
                return <ProjetosItens item={item} key={item.id}/>
            })}
        </div>
    </>
  )
}

export default Projetos;