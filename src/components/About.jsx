export const About = () => {
    return (
        <section className="about">

            {/* Marketing Tools */}
            <div className="expertise">
                <img src="/Marketing_Tools.svg" alt="Marketing Tools" />
                <div className="expertise-details">
                    <h2 className="expertise-title">
                        We’re experts with <span>modern marketing tools,</span> so you don’t have to be!
                    </h2>
                    <p className="expertise-body">
                        With hands-on experience in B2B’s most innovative apps and tools, we take a data-driven approach to continually improve prospect engagement. Whether we work directly out of your platform or provide our insights manually, you always get full visibility into the process.
                    </p>
                </div>
            </div>

            {/* Marketing Team */}
            <div className="marketing-team">
                <div className="marketing-team-details">
                    <h2 className="marketing-team-title">
                        <span>The best way</span> to build a marketing team
                    </h2>
                    <p className="marketing-team-body">
                        With EBQ, you’re not just hiring a marketing specialist. You’re getting an entire marketing department at a fraction of the cost and effort of hiring internally.<br/><br/>
                        For each project, we provide: a Success Manager to drive high-level strategy, a Project Manager to oversee day-to-day operations, and one or more Specialists working diligently to amplify your brand.
                    </p>
                </div>
                <img src="/Complete-Department-Marketing.png" alt="Marketing Tools" />
            </div>
        </section>
    )
}