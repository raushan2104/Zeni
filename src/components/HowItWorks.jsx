const stepsData = [
    {
        icon: '/assets/images/png/1.png',
        title: '1. Upload Contacts & Group Them',
        description: 'Upload your contacts and group them as needed.',
    },
    {
        icon: '/assets/images/png/2.png',
        title: '2. Create Campaigns with Templates',
        description: 'Create a campaign with a script or message template.',
    },
    {
        icon: '/assets/images/png/3.png',
        title: '3. AI or Agents Run Calls & Messages',
        description: "Zeni's AI or agents make calls or send messages automatically.",
    },
    {
        icon: '/assets/images/png/4.png',
        title: '4. Inbound Helplines & Appointments',
        description: 'You can also create in-bound helpline numbers where people can call and seek more inputs or schedule an appointment.',
    },
    {
        icon: '/assets/images/png/5.png',
        title: '5. Every Interaction Becomes an Event',
        description: 'Every interaction is recorded as an event in the system.',
    },
    {
        icon: '/assets/images/png/6.png',
        title: '6. Tasks & Reports Auto-Created',
        description: 'Tasks and reports are created automatically for easy tracking and follow-up.',
    },
    {
        icon: '/assets/images/png/7.png',
        title: '7. Two-way Communication',
        description: 'Zeni can also support two-way communication through email and WhatsApp.',
    },
]

function HowItWorks() {
    return (
        <div id="how-it-works" className="ai-dreams-area bg-pink section-gap-xl-bottom section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title text-center">
                            <h3>How It Works</h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center ai-dreams-wrap pt-5 gy-5">
                    {stepsData.map((step, index) => (
                        <div key={index} className="col-lg-4 col-md-6 ai-dreams-box">
                            <div className="ai-dreams-single text-center">
                                <div className="ai-dreams-icon-wrap">
                                    <img src={step.icon} alt="" width="100" />
                                </div>
                                <h4>{step.title}</h4>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
