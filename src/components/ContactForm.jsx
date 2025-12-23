import { useState } from 'react'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <div id="contact" className="ai-contact-area section-gap-xl-bottom section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span>Contact</span>
                            <h3>Let's Get In Touch!</h3>
                            <p className="mt-2">
                                Tell us how you plan to use Zeni — for recruitment, sales, customer support, surveys or scheduling —
                                and we'll help you get started.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <form className="ai-contact" onSubmit={handleSubmit}>
                            <div className="row pt-60">
                                <div className="col-lg-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-lg-6">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-lg-12">
                                    <textarea
                                        cols="30"
                                        rows="6"
                                        name="message"
                                        placeholder="Tell us about your use case (e.g. HR recruitment, sales campaigns, surveys, support, scheduling)…"
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-lg-12 text-center">
                                    <button type="submit" className="btn-fill-outlined-purple">Contact Us</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
