import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.brand}>
                        <span className={styles.logo}>APEX</span>
                        <span className={styles.tagline}>CONSULTING</span>
                    </div>
                    <div className={styles.links}>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Careers</Link>
                    </div>
                    <p className={styles.copy}>© {new Date().getFullYear()} APEX Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
