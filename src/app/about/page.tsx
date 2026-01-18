import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./about.module.css";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const values = [
    { icon: Target, title: "Client-First", desc: "Your success is our only metric" },
    { icon: Users, title: "Collaborative", desc: "We work alongside your team" },
    { icon: Award, title: "Excellence", desc: "Uncompromising quality standards" },
    { icon: TrendingUp, title: "Results-Driven", desc: "Measurable impact, always" },
];

const team = [
    { name: "Sarah Chen", role: "Managing Partner", bio: "Former McKinsey principal with 15+ years in strategy" },
    { name: "Marcus Rodriguez", role: "Partner, Operations", bio: "Ex-Amazon VP, operational excellence expert" },
    { name: "Elena Petrova", role: "Partner, M&A", bio: "20+ years in private equity and corporate development" },
    { name: "James Walker", role: "Partner, Digital", bio: "Technology transformation leader, ex-Google" },
];

export default function AboutPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="pattern-diagonal" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
                <div className="container">
                    <span className={styles.label}>Who We Are</span>
                    <h1>Building Better Businesses</h1>
                    <p className={styles.subtitle}>
                        We're a team of former operators, strategists, and industry leaders dedicated to
                        solving complex business challenges and driving sustainable growth.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <div className={styles.story}>
                        <h2>Our Story</h2>
                        <p>
                            Founded in 2008 by former executives from top consulting firms and Fortune 500 companies,
                            APEX Consulting was built on a simple premise: businesses deserve better consulting.
                        </p>
                        <p>
                            We've spent over 15 years partnering with ambitious leaders to navigate complexity, drive
                            transformation, and achieve measurable results. From growth strategy to operational excellence,
                            we bring real-world experience and proven methodologies to every engagement.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-cream">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Our Values</h2>
                    <div className={styles.valuesGrid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <v.icon size={28} />
                                </div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding bg-white">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Leadership Team</h2>
                    <div className={styles.teamGrid}>
                        {team.map((member, i) => (
                            <div key={i} className={styles.memberCard}>
                                <div className={styles.memberAvatar}>{member.name.split(' ').map(n => n[0]).join('')}</div>
                                <h3>{member.name}</h3>
                                <span className={styles.role}>{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
