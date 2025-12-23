import { useState, useEffect } from 'react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavClick = (e, targetId) => {
        e.preventDefault()
        setMenuOpen(false)
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header>
            <div className={`header-area header-defult header-style-one ${sticky ? 'sticky' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                            <div className="nav-logo d-flex justify-content-between align-items-center">
                                <a href="#">
                                    <img src="/assets/images/logo-dark.png" alt="logo" width="120" />
                                </a>

                                <div className="d-flex align-items-center gap-4">
                                    <div className="mobile-menu d-flex">
                                        <a
                                            href="#"
                                            className={`hamburger d-block d-xl-none ${menuOpen ? 'h-active' : ''}`}
                                            onClick={(e) => { e.preventDefault(); setMenuOpen(!menuOpen) }}
                                        >
                                            <span className="h-top"></span>
                                            <span className="h-middle"></span>
                                            <span className="h-bottom"></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6 col-xs-6 d-xl-flex justify-content-lg-center">
                            <nav className={`main-nav float-end ${menuOpen ? 'slidenav' : ''}`}>
                                <div className="inner-logo d-xl-none text-center">
                                    <a href="#">
                                        <img src="/assets/images/logo-dark.png" alt="" />
                                    </a>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>Features</a>
                                    </li>
                                    <li>
                                        <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>How It Works</a>
                                    </li>
                                    <li>
                                        <a href="#why-zeni" onClick={(e) => handleNavClick(e, 'why-zeni')}>Why Zeni</a>
                                    </li>
                                    <li>
                                        <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a>
                                    </li>
                                </ul>

                                <div className="inner-contact-options d-xl-none d-inline-flex flex-column px-3">
                                    <a href="#" className="btn-transparent-xl mb-3">Login</a>
                                    <a href="#" className="btn-outlined-round">Sign up</a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-xl-3">
                            <div className="nav-right float-end d-xl-flex d-none">
                                <a href="#" className="btn-transparent-xl">Login</a>
                                <a href="#" className="btn-outlined-round">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
