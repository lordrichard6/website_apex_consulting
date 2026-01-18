import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./insights.module.css";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
    {
        title: "The Future of Digital Transformation in 2026",
        excerpt: "How AI and automation are reshaping business operations across industries.",
        category: "Technology",
        date: "Jan 15, 2026",
        readTime: "5 min read"
    },
    {
        title: "Building Resilient Supply Chains",
        excerpt: "Strategies for mitigating risk and ensuring operational continuity in uncertain times.",
        category: "Operations",
        date: "Jan 10, 2026",
        readTime: "7 min read"
    },
    {
        title: "M&A Integration: The First 100 Days",
        excerpt: "A comprehensive guide to post-merger integration and value capture.",
        category: "M&A",
        date: "Jan 5, 2026",
        readTime: "6 min read"
    },
    {
        title: "Sustainable Growth Strategies",
        excerpt: "Balancing profitability with environmental and social responsibility.",
        category: "Strategy",
        date: "Dec 28, 2025",
        readTime: "4 min read"
    },
    {
        title: "The ROI of Organizational Culture",
        excerpt: "How investing in culture drives performance and retention.",
        category: "Leadership",
        date: "Dec 20, 2025",
        readTime: "5 min read"
    },
    {
        title: "Data-Driven Decision Making at Scale",
        excerpt: "Implementing analytics frameworks that actually drive business outcomes.",
        category: "Analytics",
        date: "Dec 15, 2025",
        readTime: "8 min read"
    },
];

export default function InsightsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="pattern-dots" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}></div>
                <div className="container">
                    <span className={styles.label}>Insights & Perspectives</span>
                    <h1>Thought Leadership</h1>
                    <p className={styles.subtitle}>
                        Expert insights on strategy, operations, and transformation from the APEX team.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.grid}>
                        {articles.map((article, i) => (
                            <article key={i} className={styles.card}>
                                <span className={styles.category}>{article.category}</span>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <div className={styles.meta}>
                                    <span><Calendar size={16} /> {article.date}</span>
                                    <span><Clock size={16} /> {article.readTime}</span>
                                </div>
                                <a href="#" className={styles.readMore}>
                                    Read Article <ArrowRight size={16} />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
