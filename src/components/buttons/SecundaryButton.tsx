'use client';

import styles from '@/styles/components/buttons/SecundaryButton.module.scss';

interface SecundaryButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    bgwhite?: boolean;
}

const SecundaryButton = ({children, onClick, bgwhite}: SecundaryButtonProps) => {
    return (
        <button className={bgwhite ? `${styles.secundary_button} ${styles.bgwhite}` : styles.secundary_button } onClick={onClick}>{children}</button>
    )
}



export default SecundaryButton