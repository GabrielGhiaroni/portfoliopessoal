import React, { useState } from 'react';
import styles from './Qualificacao.module.css';
import { SlGraduation } from 'react-icons/sl';
import { BsBriefcase, BsCalendar } from 'react-icons/bs';

const Qualificacao = () => {
    const [idQualificacao, setIdQualificacao] = useState(1);

    const atribuirIdQualificacao = (index) => {
        setIdQualificacao(index)
    };
    
  return (
    <section id='qualificacao' className={[styles.qualificacao, "styles"].join(' ')}>
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Minha jornada pessoal</span>

        <div className={[styles.qualificacao__container, "container"].join(' ')}>
            <div className={styles.qualificacao__tabs}>
                <div className={idQualificacao === 1
                    ? [styles.qualificacao__button, styles.qualificacao__ativo, "button--flex"].join(' ')
                    : [styles.qualificacao__button, "button--flex"].join(' ')} onClick={() => atribuirIdQualificacao(1)}>
                    <SlGraduation className={styles.qualificacao__icon}/> Formação
                </div>

                <div className={idQualificacao === 2
                    ? [styles.qualificacao__button, styles.qualificacao__ativo, "button--flex"].join(' ')
                    : [styles.qualificacao__button, "button--flex"].join(' ')} onClick={() => atribuirIdQualificacao(2)}>
                    <BsBriefcase className={styles.qualificacao__icon}/> Experiência
                </div>
            </div>

            <div className={styles.qualificacao__sections}>
                <div className={idQualificacao === 1
                    ? [styles.qualificacao__content, styles.qualificacao__contentAtivo, styles.qualificacao__ativo].join(' ')
                    : [styles.qualificacao__content]}>
                    <div className={styles.qualificacao__data}>
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Backend</h3>
                            <span className={styles.qualificacao__subtitle}>Cubos Academy</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2022
                            </div>
                        </div>

                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                            <span className={styles.qualificacao__linha}></span>
                        </div>
                    </div>

                    <div className={styles.qualificacao__data}>
                        <div></div>
                        
                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                            <span className={styles.qualificacao__linha}></span>
                        </div>
        
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Frontend</h3>
                            <span className={styles.qualificacao__subtitle}>Cubos Academy</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2022
                            </div>
                        </div>
                    </div>     
                    <div className={styles.qualificacao__data}>
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Frontend</h3>
                            <span className={styles.qualificacao__subtitle}>Origamid</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2022
                            </div>
                        </div>

                        <div>
                            <span className={styles.qualificacao__circulo}></span>  
                        </div>
                    </div>
                </div>

                <div className={idQualificacao === 2
                    ? [styles.qualificacao__content, styles.qualificacao__contentAtivo, styles.qualificacao__ativo].join(' ')
                    : [styles.qualificacao__content]}>
                    <div className={styles.qualificacao__data}>
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Fullstack</h3>
                            <span className={styles.qualificacao__subtitle}>Autônomo</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2021 - Presente
                            </div>
                        </div>

                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                            <span className={styles.qualificacao__linha}></span>
                        </div>
                    </div>

                    <div className={styles.qualificacao__data}>
                        <div></div>
                        
                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                            <span className={styles.qualificacao__linha}></span>
                        </div>
        
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Frontend</h3>
                            <span className={styles.qualificacao__subtitle}>Google</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2023 - 2024
                            </div>
                        </div>
                    </div>

                    <div className={styles.qualificacao__data}>
                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Mobile</h3>
                            <span className={styles.qualificacao__subtitle}>Apple</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2024 - 2025
                            </div>
                        </div>

                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                            <span className={styles.qualificacao__linha}></span>
                        </div>
                    </div>

                    <div className={styles.qualificacao__data}>
                        <div></div>
                        <div>
                            <span className={styles.qualificacao__circulo}></span>
                        </div>

                        <div>
                            <h3 className={styles.qualificacao__title}>Desenvolvedor Backend</h3>
                            <span className={styles.qualificacao__subtitle}>Facebook</span>

                            <div className={styles.qualificacao__calendario}>
                                <BsCalendar /> 2025 - 2028
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualificacao;