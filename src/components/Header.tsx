'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image src="/icon.png" alt="APEX" width={40} height={40} priority />
                    <div className={styles.brandText}>
                        <span className={styles.brandName}>APEX</span>
                        <span className={styles.brandTagline}>Consulting</span>
                    </div>
                </Link>

                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
                    <Link href="/insights" onClick={() => setIsOpen(false)}>Insights</Link>
                    <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>

                <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
                    Get Started
                </a>

                <button
                    className={styles.hamburger}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}
