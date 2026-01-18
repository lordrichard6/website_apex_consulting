import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.brand}>
                        <Image src="/logo.png" alt="APEX Consulting" width={120} height={40} />
                        <p>Transforming businesses through strategic insight and operational excellence.</p>
                        <div className={styles.social}>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="mailto:contact@apex consulting.com" aria-label="Email"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.columns}>
                        <div className={styles.column}>
                            <h4>Company</h4>
                            <Link href="/about">About Us</Link>
                            <Link href="/#services">Services</Link>
                            <Link href="/insights">Insights</Link>
                            <Link href="/#contact">Contact</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Resources</h4>
                            <Link href="/insights">Blog</Link>
                            <Link href="#">Case Studies</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Partners</Link>
                        </div>

                        <div className={styles.column}>
                            <h4>Legal</h4>
                            <Link href="/privacy">Privacy Policy</Link>
                            <Link href="/terms">Terms of Service</Link>
                            <Link href="#">Cookie Policy</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} APEX Consulting. All rights reserved.</p>
                    <p>Built by <a href="https://lopes2tech.com" target="_blank" rel="noopener">Lopes2Tech</a></p>
                </div>
            </div>
        </footer>
    );
}
