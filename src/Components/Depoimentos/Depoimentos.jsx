import React from 'react';
import styles from './Depoimentos.module.css';
import { Data } from './Data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Depoimentos = () => {
  return (
    <section id='depoimentos' className={[styles.depoimentos, "container", "section"].join(' ')}>
        <h2 className="section__title">Depoimentos</h2>
        <span className="section__subtitle">O que falam sobre mim</span>

        <Swiper className={styles.depoimentos__container}
         loop={true}
         grabCursor={true}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}
         breakpoints={{
           576: {
             slidesPerView: 1,
             spaceBetween: 20,
           },
           768: {
             slidesPerView: 1,
             spaceBetween: 40,
           },
         }}
         modules={[Pagination]}
        >
            {
                Data.map(({id, imagem, nome, depoimento}) => {
                    return (
                        <SwiperSlide className={styles.depoimentos__card} key={id}>
                            <div><img src={imagem} alt="foto cliente" className={styles.depoimentos__foto}/></div>

                            <h3 className={styles.depoimentos__nome}>{nome}</h3>

                            <p className={styles.depoimentos__depoimentoCliente}>{depoimento}</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </section>
  )
}

export default Depoimentos;