import { useMagneticButton } from "../utilities/useMagneticButton"

export const Hero = () => {
    const btnRef = useMagneticButton(0.2, 1.6); // Pass values to useMagneticButton hook which adjusts the strength and fling values for the button

    return (
        <section className="hero">
            {/* Header */}
            <header className="header-container">
                <nav className="header">
                    <div className="logo">
                        <a href="/">
                            <img src="/ebq-logo.png" alt="EBQ Logo"  />
                        </a>
                    </div>
                    <button ref={btnRef} className="contact-us">
                        Contact Us
                    </button>
                </nav>
            </header>

            {/* Hero Content */}
            <div className="hero-content-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Integrated
                        <span> Marketing Services</span>
                    </h1>
                    <p className="hero-body">
                        We turn your marketing plans into action by building on your ideas and executing initiatives alongside you and your team. Get a complete department that can pivot to different areas of marketing based on your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

