import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function PrivacyPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Information We Collect</h2>
                        <p>
                            APEX Consulting ("we," "our," or "us") collects information you provide directly to us when you:
                        </p>
                        <ul>
                            <li>Request information about our services</li>
                            <li>Schedule a consultation</li>
                            <li>Subscribe to our newsletter or insights</li>
                            <li>Contact us through our website</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>We may use the information we collect to:</p>
                        <ul>
                            <li>Respond to your inquiries and provide requested services</li>
                            <li>Send you updates, newsletters, and marketing communications</li>
                            <li>Improve our website and services</li>
                            <li>Comply with legal obligations</li>
                        </ul>

                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share your
                            information with:
                        </p>
                        <ul>
                            <li>Service providers who assist in our operations</li>
                            <li>Professional advisors (lawyers, accountants, etc.)</li>
                            <li>Law enforcement or regulatory bodies when required by law</li>
                        </ul>

                        <h2>4. Data Security</h2>
                        <p>
                            We implement reasonable security measures to protect your personal information from unauthorized
                            access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.
                        </p>

                        <h2>5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul>
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h2>6. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your experience. You can control cookies through your browser settings.
                        </p>

                        <h2>7. Contact Us</h2>
                        <p>
                            For questions about this Privacy Policy, please contact us at:{" "}
                            <a href="mailto:privacy@apexconsulting.com">privacy@apexconsulting.com</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
