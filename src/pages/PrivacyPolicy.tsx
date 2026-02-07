import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-light text-dark font-sans selection:bg-dark selection:text-light">
            <div className="max-w-4xl mx-auto px-6 py-20 md:py-32">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest hover:text-dark/60 transition-colors mb-12"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
                    <p className="text-dark/60 mb-12">Last updated: February 2026</p>

                    <div className="space-y-12 text-lg leading-relaxed text-dark/80">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">1. Introduction</h2>
                            <p>
                                Welcome to the portfolio website of Fairoz Faisal ("we," "our," or "us").
                                We are committed to protecting your personal information and your right to privacy.
                                This Privacy Policy explains how we collect, use, disclosure, and safeguard your information
                                when you visit our website <a href="https://fairoz.in" className="underline">fairoz.in</a>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">2. Information We Collect</h2>
                            <p className="mb-4">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contact us via the contact form or email.</li>
                                <li>Sign up for our newsletter (if applicable).</li>
                                <li>Participate in surveys or promotions.</li>
                            </ul>
                            <p className="mt-4">
                                The personal information we collect may include:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-2">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Message contents</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">3. How We Use Your Information</h2>
                            <p>
                                We use the information we collect or receive:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>To facilitate account creation and logon process.</li>
                                <li>To send you administrative information.</li>
                                <li>To respond to your inquiries and offer support.</li>
                                <li>To improve our website and user experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">4. Sharing Your Information</h2>
                            <p>
                                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information
                                unless we provide users with advance notice. This does not include website hosting partners and other
                                parties who assist us in operating our website, conducting our business, or serving our users, so long
                                as those parties agree to keep this information confidential.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">5. Security of Your Information</h2>
                            <p>
                                We use administrative, technical, and physical security measures to help protect your personal information.
                                While we have taken reasonable steps to secure the personal information you provide to us, please be aware
                                that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
                                can be guaranteed against any interception or other type of misuse.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-dark">6. Contact Us</h2>
                            <p>
                                If you have questions or comments about this policy, you may email us at:
                                <br />
                                <a href="mailto:hey@fairoz.in" className="font-medium underline mt-2 inline-block">hey@fairoz.in</a>
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
