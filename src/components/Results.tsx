import styles from './Results.module.css';

const stats = [
    { num: "$2.4B+", label: "Value Created" },
    { num: "200+", label: "Clients Served" },
    { num: "98%", label: "Client Retention" },
    { num: "15+", label: "Industries" },
];

const cases = [
    { client: "Fortune 500 Retailer", result: "32% increase in operational efficiency", type: "Operations" },
    { client: "Tech Scale-up", result: "3x revenue growth in 18 months", type: "Strategy" },
    { client: "Private Equity Portfolio", result: "$180M EBITDA improvement", type: "M&A" },
];

export default function Results() {
    return (
        <section id="results" className={`section-padding ${styles.results}`}>
            <div className="container">
                <div className={styles.header}>
                    <span className={styles.label}>Proven Impact</span>
                    <h2>Results That <span className="text-blue">Speak</span></h2>
                </div>

                <div className={styles.stats}>
                    {stats.map((s, i) => (
                        <div key={i} className={styles.stat}>
                            <span className={styles.num}>{s.num}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.cases}>
                    {cases.map((c, i) => (
                        <div key={i} className={styles.caseCard}>
                            <span className={styles.type}>{c.type}</span>
                            <p className={styles.caseResult}>{c.result}</p>
                            <span className={styles.client}>{c.client}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
