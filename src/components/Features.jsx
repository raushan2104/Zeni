import { useState } from 'react'

const CheckIcon = () => (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M11.25 15L13.75 17.5L18.75 12.5M26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15C3.75 8.7868 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15Z"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        />
    </svg>
)

const tabsData = [
    {
        id: 'pills-home',
        tabId: 'pills-home-tab',
        title: 'Campaigns & Templates',
        sideTitle: 'Campaigns & Templates',
        description: 'Manage all your outbound communication with campaigns and reusable templates.',
        features: [
            'Campaigns – Create and run voice, SMS, and WhatsApp campaigns.',
            'Templates – Build scripts and messages for consistent communication.',
        ],
        image: '/assets/images/new-images-v4/feature1.png',
    },
    {
        id: 'pills-profile',
        tabId: 'pills-profile-tab',
        title: 'Contacts & Groups',
        sideTitle: 'Contacts & Groups',
        description: 'Keep all your customer, lead and stakeholder data organised in one place.',
        features: [
            'Contacts & Groups – Manage customer lists and target groups.',
        ],
        image: '/assets/images/new-images-v4/feature2.png',
    },
    {
        id: 'pills-contact',
        tabId: 'pills-contact-tab',
        title: 'Scheduling & Tasks',
        sideTitle: 'Scheduling & Tasks',
        description: 'Convert every interaction into a scheduled action or a follow-up task.',
        features: [
            'Scheduling – Help your contacts schedule and book calls and appointments with Calendar Invites & Scheduling',
            'Tasks – Auto-generate follow-ups or reminders based on call results.',
        ],
        image: '/assets/images/new-images-v4/feature3.png',
    },
    {
        id: 'pills-chat-01',
        tabId: 'pills-contact-01-tab',
        title: 'Events, Analytics & Integrations',
        sideTitle: 'Events, Analytics & Integrations',
        description: 'Track every interaction, measure performance and connect with your existing tools.',
        features: [
            'Call Events – Track every call, SMS, Email or Whatsapp interaction automatically.',
            'Analytics – See campaign reports, agent performance, and conversion insights.',
            'Integrations – Connect with third-party APIs like Twilio, Exotel, or your CRM.',
        ],
        image: '/assets/images/new-images-v4/feature4.png',
    },
]

function Features() {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div id="features" className="ai-service-area about-company-header section-gap-xl-bottom section-gap-xl-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                        <div className="section-title text-center">
                            <h3>Key Features</h3>
                        </div>
                    </div>
                </div>
                <div className="row pt-md-5 pt-3">
                    <div className="col-lg-12">
                        <div className="ai-service">
                            <ul className="nav nav-pills mb-5" id="pills-tab" role="tablist">
                                {tabsData.map((tab, index) => (
                                    <li className="nav-item" role="presentation" key={tab.id}>
                                        <button
                                            className={`nav-link ${activeTab === index ? 'active' : ''}`}
                                            id={tab.tabId}
                                            type="button"
                                            role="tab"
                                            aria-controls={tab.id}
                                            aria-selected={activeTab === index}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {tab.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            <div className="tab-content" id="pills-tabContent">
                                {tabsData.map((tab, index) => (
                                    <div
                                        key={tab.id}
                                        className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
                                        id={tab.id}
                                        role="tabpanel"
                                        aria-labelledby={tab.tabId}
                                    >
                                        <div className="row justify-content-between gy-4">
                                            <div className="col-lg-5 order-1 order-lg-0 pt-0 pt-lg-4">
                                                <div className="ai-side-info">
                                                    <h3 className="ai-side-title">{tab.sideTitle}</h3>
                                                    <p className="ai-side-text">{tab.description}</p>
                                                    <ul>
                                                        {tab.features.map((feature, i) => (
                                                            <li key={i}>
                                                                <CheckIcon />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 order-0 order-lg-1">
                                                <div className="ai-service-img">
                                                    <img className="w-100" src={tab.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
