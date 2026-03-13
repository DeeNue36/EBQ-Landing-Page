import { useMagneticButton } from '../utilities/useMagneticButton';

export const CTA = () => {   
    const { setBtnRef } = useMagneticButton();

    return (
        <section className="cta">
            <div className="cta-content-container">
                <h3 className="cta-description">
                    Looking to take your <span>marketing to the next level?</span>
                </h3>
                <button  ref={setBtnRef} className="cta-btn">
                    Contact Us
                </button>
            </div>
        </section>
    )
}

