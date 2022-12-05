import React, { useState } from 'react';
import styles from './Servicos.module.css';
import { BsCodeSlash, BsArrowRightShort } from 'react-icons/bs';
import { CiMobile3 } from 'react-icons/ci';
import { MdOutlineAutoGraph } from 'react-icons/md';
import { BiCheckCircle } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';

const Servicos = () => {
    const [idModal, setIdModal] = useState(null);

    const atribuirIdModal = (index) => {
        setIdModal(index)
    };

  return (
    <section id='servicos' className={[styles.servicos, "section"].join(' ')}>
        <h2 className="section__title">Serviços</h2>
        <span className="section__subtitle">O que eu ofereço</span>

        <div className={[styles.servicos__container, "container", "grid"].join(' ')}>
            <div className={styles.servicos__content}>
                <div>
                    <i className={[styles.servicos__icone, "grid"].join(' ')}> <BsCodeSlash /> </i>
                    <h3 className={styles.servicos__title}>Web <br /> Development</h3>
                </div>

                <span className={styles.servicos__button} onClick={() => atribuirIdModal(1)}>Veja mais 
                    <BsArrowRightShort className={styles.servicos__buttonIcon}/>
                </span>

                <div className={idModal === 1 ? [styles.servicos__modal, styles.modalAtiva].join(' ') : styles.servicos__modal}>
                    <div className={styles.servicos__modalContent}>

                        <i className={styles.servicos__modalFechar} onClick={() => setIdModal(0)}><MdOutlineClose /></i>

                        <h3 className={styles.servicos__modalTitle}>Desenvolvedor Fullstack</h3>

                        <p className={styles.servicos__modalDescricao}>Desenvolvimento de aplicações web e sites otimizados.</p>

                        <ul className={[styles.servicos__modalServicos, "grid"].join(' ')}>
                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de interfaces</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de sites institucionais</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de APIs RESTful</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de aplicações Front e Back-end</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.servicos__content}>
                <div>
                    <i className={styles.servicos__icone}> <CiMobile3 /></i>
                    <h3 className={styles.servicos__title}>Mobile <br /> Development</h3>
                </div>

                <span className={styles.servicos__button} onClick={() => atribuirIdModal(2)}>Veja mais 
                    <BsArrowRightShort className={styles.servicos__buttonIcon}/>
                </span>

                <div className={idModal === 2 ? [styles.servicos__modal, styles.modalAtiva].join(' ') : styles.servicos__modal}>
                    <div className={styles.servicos__modalContent}>

                        <i className={styles.servicos__modalFechar} onClick={() => setIdModal(0)}><MdOutlineClose /></i>

                        <h3 className={styles.servicos__modalTitle}>Desenvolvedor Mobile</h3>

                        <p className={styles.servicos__modalDescricao}>Desenvolvimento de aplicações mobile iOS e Android.</p>

                        <ul className={[styles.servicos__modalServicos, "grid"].join(' ')}>
                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de interfaces de apps</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Desenvolvimento de apps institucionais</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Suporte em iOS</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Suporte em Android</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.servicos__content}>
                <div>
                    <i className={styles.servicos__icone}><MdOutlineAutoGraph /></i>
                    <h3 className={styles.servicos__title}>Marketing <br /> Digital</h3>
                </div>

                <span className={styles.servicos__button} onClick={() => atribuirIdModal(3)}>Veja mais 
                    <BsArrowRightShort className={styles.servicos__buttonIcon}/>
                </span>

                <div className={idModal === 3 ? [styles.servicos__modal, styles.modalAtiva].join(' ') : styles.servicos__modal}>
                    <div className={styles.servicos__modalContent}>

                        <i className={styles.servicos__modalFechar} onClick={() => setIdModal(0)}><MdOutlineClose /></i>

                        <h3 className={styles.servicos__modalTitle}>Especialista em Marketing Digital</h3>

                        <p className={styles.servicos__modalDescricao}>Campanhas que geram vendas e clientes reais para sua empresa.</p>

                        <ul className={[styles.servicos__modalServicos, "grid"].join(' ')}>
                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Reposicionamento de marca</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Branding</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Campanhas com foco em vendas e leads</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Google, Facebook e Instagram Ads</p>
                            </li>

                            <li className={styles.servicos__modalServico}>
                                <BiCheckCircle className={styles.servicos__modalIcon}/>
                                <p className={styles.servicos__modalInfo}>Twitter, Linkedin e TikTok Ads</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Servicos;