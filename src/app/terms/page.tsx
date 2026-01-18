import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./legal.module.css";

export default function TermsPage() {
    return (
        <main>
            <Header />
            <section className={styles.hero}>
                <div className="container">
                    <h1>Terms of Service</h1>
                    <p>Last updated: January 18, 2026</p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className={styles.content}>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provisions
                            of this agreement.
                        </p>

                        <h2>2. Services</h2>
                        <p>
                            APEX Consulting provides business consulting services including strategy, operations, M&A advisory,
                            and organizational transformation. All services are subject to separate engagement agreements.
                        </p>

                        <h2>3. Intellectual Property</h2>
                        <p>
                            All content on this website, including text, graphics, logos, and software, is the property of
                            APEX Consulting or its content suppliers and is protected by copyright and other intellectual
                            property laws.
                        </p>

                        <h2>4. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the website for any unlawful purpose</li>
                            <li>Attempt to gain unauthorized access to any portion of the website</li>
                            <li>Copy, modify, or distribute website content without permission</li>
                            <li>Interfere with the proper functioning of the website</li>
                        </ul>

                        <h2>5. Disclaimer of Warranties</h2>
                        <p>
                            This website is provided "as is" without any representations or warranties. APEX Consulting makes
                            no warranties regarding the accuracy, reliability, or availability of the website.
                        </p>

                        <h2>6. Limitation of Liability</h2>
                        <p>
                            APEX Consulting shall not be liable for any direct, indirect, incidental, consequential, or punitive
                            damages arising from your use of this website.
                        </p>

                        <h2>7. Modifications</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                            posting to the website.
                        </p>

                        <h2>8. Governing Law</h2>
                        <p>
                            These terms shall be governed by and construed in accordance with the laws of the jurisdiction in
                            which APEX Consulting operates.
                        </p>

                        <h2>9. Contact Information</h2>
                        <p>
                            For questions about these Terms of Service, contact us at:{" "}
                            <a href="mailto:legal@apexconsulting.com">legal@apexconsulting.com</a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
