import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.apex}>APEX</span>
                    <span className={styles.tagline}>CONSULTING</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="#services" className={styles.link}>Services</Link>
                    <Link href="#results" className={styles.link}>Results</Link>
                    <Link href="#about" className={styles.link}>About</Link>
                    <Link href="#insights" className={styles.link}>Insights</Link>
                </nav>

                <Link href="#contact" className="btn btn-primary">
                    Get Started
                </Link>
            </div>
        </header>
    );
}
