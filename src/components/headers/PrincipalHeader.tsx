'use client';
import { useState } from 'react';
import styles from '@/styles/components/headers/principal-header.module.scss';
import Image from 'next/image';
import logo from '../../../public/image/brand/logo_horizontal.png';
import icon from '../../../public/image/brand/icon.svg';
import BurgerButton from '../buttons/BurgerButton';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

function PrincipalHeader() {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <div className={styles.principal_header}>
            <div className={styles.principal_header_container}>
                <Link
                    className={styles.logo_container}
                    href="/"
                >
                    <Image src={logo} alt="Logo" width={200} height={37} />
                </Link>
                <div className={styles.burger_container}>
                    <BurgerButton 
                        isOpen={open}
                        toggleOpen={toggleOpen}
                    />
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div 
                        className={styles.menu}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.menu_container}>
                            <motion.div
                                className={styles.menu_container_left}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                    duration: 0.5
                                }}
                            >
                                <Image src={icon} alt="Icon Consultoria" width={350} height={350} />
                            </motion.div>
                            <motion.div
                                className={styles.menu_container_right}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                    duration: 0.5
                                }}
                            >
                                <ul className={styles.menu_list}>
                                    <motion.li 
                                        className={styles.menu_list_item}
                                        onClick={toggleOpen}
                                        whileHover={{ scale: 1.05, color: "#f00" }}
                                    >
                                        <Link href="/">
                                            INICIO
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className={styles.menu_list_item}
                                        onClick={toggleOpen}
                                        whileHover={{ scale: 1.05, color: "#f00" }}
                                    >
                                        <Link href="/servicios">
                                            SERVICIOS
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className={styles.menu_list_item}
                                        onClick={toggleOpen}
                                        whileHover={{ scale: 1.05, color: "#f00" }}
                                    >
                                        <Link href="/nosotros">
                                            SOBRE NOSOTROS
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className={styles.menu_list_item}
                                        onClick={toggleOpen}
                                        whileHover={{ scale: 1.05, color: "#f00" }}
                                    >
                                        <Link href="/blog">
                                            BLOG
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        className={styles.menu_list_item}
                                        onClick={toggleOpen}
                                        whileHover={{ scale: 1.05, color: "#f00" }}
                                    >
                                        <Link href="/contacto">
                                            CONTACTO
                                        </Link>
                                    </motion.li>
                                </ul>
                                <div>
                                    <Image src={logo} alt="Logo" width={200} height={37} />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default PrincipalHeader;
