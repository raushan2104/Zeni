import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom CSS files
import '../assets/css/new-css-v4/bootstrap-icons.css'
import '../assets/css/new-css-v4/animate.css'
import '../assets/css/new-css-v4/style.css'
import '../assets/css/new-css-v4/responsive.css'

// Swiper CSS
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
