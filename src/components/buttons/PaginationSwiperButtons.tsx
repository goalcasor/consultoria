import { useSwiper } from "swiper/react";
import styles from '@/styles/components/buttons/SwiperButton.module.scss'

const PaginationSwiperButtons = () => {

    const swiper = useSwiper();

  return (
    <div className={styles.swiper_pagination}>
    {/* Add logic for custom vertical pagination */}
    {Array.from({ length: swiper.slides.length }).map((_, index) => (
      <button
        key={index}
        className={`${styles.swiper_pagination_bullet} ${swiper.activeIndex === index ? styles.active : ''}`}
        onClick={() => swiper.slideTo(index)}
      >
      </button>
    ))}
  </div>
  )
}

export default PaginationSwiperButtons
