import styles from '@/styles/buttons/PrimaryButton.module.scss';

interface PrimaryButtonProps {
/*     onClick: () => void; */
    children: React.ReactNode;
}

const PrimaryButton = ({children/* , onClick */}: PrimaryButtonProps) => {
    return (
        <button className={styles.primary_button} /* onClick={onClick} */>{children}</button>
    )
}



export default PrimaryButton