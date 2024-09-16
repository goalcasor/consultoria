import { useSwiper } from "swiper/react"
import styles from '@/styles/components/buttons/SwiperButton.module.scss'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const SwiperButtons = () => {

    const swiper = useSwiper();

  return (
    <div className={styles.swiper_nav_button}>

        <button onClick={() => swiper.slidePrev()}> <MdOutlineArrowBackIos/> </button>
        <button onClick={() => swiper.slideNext()}> <MdOutlineArrowForwardIos/> </button>
      
    </div>
  )
}

export default SwiperButtons
