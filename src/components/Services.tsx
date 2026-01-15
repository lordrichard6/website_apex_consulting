import styles from './Services.module.css';
import { TrendingUp, Target, Users, Lightbulb, BarChart3, Zap } from 'lucide-react';

const services = [
    { icon: TrendingUp, title: "Growth Strategy", desc: "Market expansion, new revenue streams, and competitive positioning." },
    { icon: Target, title: "Operations Excellence", desc: "Process optimization, cost reduction, and efficiency gains." },
    { icon: Users, title: "Organizational Design", desc: "Team structure, talent strategy, and culture transformation." },
    { icon: Lightbulb, title: "Digital Transformation", desc: "Technology roadmaps, automation, and data-driven decisions." },
    { icon: BarChart3, title: "M&A Advisory", desc: "Due diligence, integration planning, and value creation." },
    { icon: Zap, title: "Turnaround", desc: "Crisis management, restructuring, and performance recovery." },
];

export default function Services() {
    return (
        <section id="services" className={`section-padding ${styles.services}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>What We Do</span>
                    <h2>Services Built for <span className="text-blue">Impact</span></h2>
                    <p className={styles.subtitle}>
                        We bring deep industry expertise and proven methodologies to every engagement.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((s, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <s.icon size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>{s.title}</h3>
                            <p className={styles.cardDesc}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
