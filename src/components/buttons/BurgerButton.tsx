import React from 'react';
import styles from '@/styles/components/buttons/burger_button.module.scss'; // Adjust the path as necessary

interface BurgerButtonProps {
    isOpen: boolean;
    toggleOpen: () => void;
  }
  
  const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, toggleOpen }) => {
  return (
    <div 
      className={isOpen ? `${styles.menuBars} ${styles.open}` : styles.menuBars}
      onClick={toggleOpen}
    >
      <div className={styles.btnBurger}></div>
    </div>
  );
};

export default BurgerButton;