import { useMagneticButton } from '../utilities/useMagneticButton';

export const CTA = () => {
    const btnRef = useMagneticButton();

    return (
        <section className="cta">
            <div className="cta-content-container">
                <h3 className="cta-description">
                    Looking to take your <span>marketing to the next level?</span>
                </h3>
                <button  ref={btnRef} className="cta-btn">
                    Contact Us
                </button>
            </div>
        </section>
    )
}

