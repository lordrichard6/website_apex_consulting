import Image from 'next/image';
import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>Strategy & Growth Partners</div>
                    <h1 className={styles.title}>
                        Unlock Your Business <span className="text-blue">Potential</span>
                    </h1>
                    <p className={styles.desc}>
                        We partner with ambitious leaders to solve complex challenges,
                        drive transformation, and achieve sustainable growth.
                    </p>
                    <div className={styles.actions}>
                        <a href="#contact" className="btn btn-primary">
                            Schedule a Call <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="#results" className={styles.secondaryLink}>View Our Results</a>
                    </div>

                    <div className={styles.clients}>
                        <span>Trusted by 200+ companies including</span>
                        <div className={styles.logos}>
                            <span>Fortune 500</span>
                            <span>•</span>
                            <span>Tech Startups</span>
                            <span>•</span>
                            <span>PE Firms</span>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero.png"
                        alt="APEX Consulting Team"
                        width={600}
                        height={500}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
