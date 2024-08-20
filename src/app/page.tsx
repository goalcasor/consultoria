import styles from '@/styles/home/home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <video  autoPlay loop muted playsInline>
      <source src='/video/logo_consultoria.mp4' type="video/mp4"></source>
      </video>
    </main>
  );
}
