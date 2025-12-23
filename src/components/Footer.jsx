function Footer() {
    const handleNavClick = (e, targetId) => {
        if (targetId) {
            e.preventDefault()
            const element = document.getElementById(targetId)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <div className="footer-style-one footer-ai position-relative">
            <div className="container">
                <div className="row pb-60">
                    <div className="col-lg-4 pt-4">
                        <div className="footer-about">
                            <div className="footer-logo">
                                <a href="#">
                                    <img src="/assets/images/logo-dark.png" alt="" width="150" />
                                </a>
                            </div>

                            <p className="footer-disc body-disply-1 text-purple-haze">
                                Zeni is an AI-powered call automation and multi-modal AI platform for calls, campaigns, scheduling and
                                always-on customer communication.
                            </p>

                            <ul className="footer-social-links d-flex">
                                <li>
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            {/* Column 1 */}
                            <div className="col-lg-4 col-md-4 col-sm-6 d-lg-flex justify-content-center pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Our Links</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a></li>
                                        <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</a></li>
                                        <li><a href="#why-zeni" onClick={(e) => handleNavClick(e, 'why-zeni')}>Why Zeni</a></li>
                                        <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="col-lg-4 col-md-4 col-sm-6 pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Use Cases</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">HR Recruitment Campaigns</a></li>
                                        <li><a href="#">Sales & Marketing Outreach</a></li>
                                        <li><a href="#">Surveys & Feedback</a></li>
                                        <li><a href="#">Customer Support Helplines</a></li>
                                        <li><a href="#">Scheduling & Reminders</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* Column 3 */}
                            <div className="col-lg-4 col-md-4 col-sm-6 pt-4">
                                <div className="footer-widget">
                                    <h5 className="footer-widget-title text-bright-gray">Other Links</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Help Center</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#">Support</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 pt-3">
                        <a href="#" className="footer-terms-text">Terms & condition</a>
                    </div>
                    <div className="col-md-6 pt-3">
                        <p className="footer-right-text text-md-end">
                            All rights reserved @Zeni.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
