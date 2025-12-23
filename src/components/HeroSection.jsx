function HeroSection() {
    return (
        <div className="ai-hero-area position-relative">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="ai-hero-info text-center">
                            <h2>
                                <span>Smart Call Automation</span> Platform
                            </h2>
                            <p>
                                Zeni is an AI-powered call automation and multi-modal AI platform that helps businesses manage calls,
                                campaigns, scheduling and customer communication with ease. It connects people, data and actions in one
                                simple dashboard — built for sales, support and service teams that want to reach more customers in less
                                time.
                            </p>
                            <div className="trial-btn mt-5">
                                <a className="btn-fill-rounded" href="#">Start Free with Zeni</a>
                            </div>
                            <p className="mt-3 small text-purple-haze">
                                Zeni makes calling smarter by automating repetitive tasks, recording outcomes, and helping teams follow
                                up faster.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="position-absolute hero-sp-round" src="/assets/images/new-images-v4/shapes/hero-ai-round.png" alt="" />
            <img className="position-absolute hero-sp-parallax" src="/assets/images/new-images-v4/shapes/hero-ai-paralux.svg" alt="" />
        </div>
    )
}

export default HeroSection
