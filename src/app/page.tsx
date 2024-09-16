'use client';

import styles from '@/styles/home/home.module.scss';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Mousewheel, Parallax, Navigation } from 'swiper/modules'; 
import { HeroPageSliderData_es } from '@/data/HeroPageSliderData';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; 
import SwiperButtons from '@/components/buttons/SwiperButtons';
import PaginationSwiperButtons from '@/components/buttons/PaginationSwiperButtons';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const imageVariants = {
    enter: { scale: 1, opacity: 1, transition: { duration: 1.1 } },
    exit: { scale: 1.3, opacity: 0, transition: { duration: 1.1 } }, 
  };

  const parallaxAmount = 0.5; 

  return (
    <main className={styles.main}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        parallax={true} 
        modules={[Mousewheel, Pagination, Parallax, Navigation]} 
        className={styles.swiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} 
      >
        {HeroPageSliderData_es.map((slide, index) => (
          <SwiperSlide key={slide.id} className={styles.swiper_slide}>
            <div className={styles.swiper_slide_container}>
              <div className={styles.gradientOverlay}></div>

              <AnimatePresence>
                {activeIndex === index && ( 
                  <>
                    <div className={styles.centerContainer}>
                      <div className={styles.centerBlock}>
                        <motion.div
                          className={styles.title_container}
                          initial="exit"
                          animate="enter"
                          exit="exit"
                          key={`title-${slide.id}`}
                        >
                          <motion.h1 
                            className={styles.mainTitle}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                          >
                            {slide.title}
                            <motion.span 
                              className={styles.titleSpan}
                              initial={{ opacity: 0, y: 100 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 50 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                            >
                              {slide.titleSpan}
                            </motion.span>
                          </motion.h1>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      className={styles.swiper_slide_image}
                      initial="exit"
                      animate="enter"
                      exit="exit"
                      variants={imageVariants}
                      key={`image-${slide.id}`}
                      data-swiper-parallax={parallaxAmount * 100} 
                    >
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}
          <SwiperButtons />
          <PaginationSwiperButtons />
      </Swiper>
    </main>
  );
}
