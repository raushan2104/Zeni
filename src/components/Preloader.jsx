import { useEffect, useState } from 'react'

function Preloader({ visible }) {
    const [show, setShow] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        if (!visible) {
            setFadeOut(true)
            const timer = setTimeout(() => {
                setShow(false)
            }, 500)
            return () => clearTimeout(timer)
        }
    }, [visible])

    if (!show) return null

    return (
        <div
            className="preloader"
            style={{
                opacity: fadeOut ? 0 : 1,
                transition: 'opacity 0.5s ease',
                pointerEvents: fadeOut ? 'none' : 'auto'
            }}
        >
            <div className="spinner-wrap">
                <div className="preloder-logo">
                    <img src="/assets/images/logo-light.png" alt="" className="img-fluid" />
                </div>
                <div className="spinner"></div>
            </div>
        </div>
    )
}

export default Preloader
