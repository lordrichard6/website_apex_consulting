import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={`section-padding ${styles.contact}`}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <span className={styles.label}>Let's Talk</span>
                        <h2>Ready to Transform Your Business?</h2>
                        <p className={styles.desc}>
                            Schedule a free 30-minute consultation with one of our partners to discuss your challenges and opportunities.
                        </p>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.row}>
                            <input type="text" placeholder="Name" className={styles.input} />
                            <input type="email" placeholder="Work Email" className={styles.input} />
                        </div>
                        <input type="text" placeholder="Company" className={styles.input} />
                        <select className={styles.input}>
                            <option value="">Select Service</option>
                            <option>Growth Strategy</option>
                            <option>Operations Excellence</option>
                            <option>Digital Transformation</option>
                            <option>M&A Advisory</option>
                        </select>
                        <textarea placeholder="Tell us about your challenge..." rows={4} className={styles.textarea}></textarea>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Request Consultation</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
