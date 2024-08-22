import styles from '@/styles/home/home.module.scss'
import BlurIn from "@/components/magicui/blur-in";
import Globe from "@/components/magicui/globe";
import {AnimatedBeamMultipleOutputDemo} from '@/my-components/BeamExample'

export default function Home() {
  return (
    <main className={styles.main}>
      <BlurIn word="ConsultorIA" />
      <Globe  />
     {/*  <AnimatedBeamMultipleOutputDemo /> */}

    </main>
  );
}
