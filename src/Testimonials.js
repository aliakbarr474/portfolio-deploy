import './testimonials.css';
import SpotlightCard from './SpotlightCard';

const Testimonials = () => {
    const testimonialsData = [
        {
            id: 1,
            name: "AM Decor",
            project: "// Full-Stack ERP",
            text: "The contract and financial management system completely streamlined our workflow. Automated secure PDF invoices changed the game for our daily operations.",
            spotlightColor: "rgba(59, 130, 246, 0.2)"
        },
        {
            id: 2,
            name: "BalochiGlam",
            project: "// Headless E-Commerce",
            text: "Our e-commerce setup is blazing fast. Having full content control through Sanity CMS makes managing our custom orders incredibly easy.",
            spotlightColor: "rgba(52, 211, 153, 0.2)"
        },
        {
            id: 3,
            name: "Sarte",
            project: "// Portfolio Architecture",
            text: "A highly professional and aesthetic UI/UX that perfectly presents our business front. The structural engineering of the site is exactly what we needed.",
            spotlightColor: "rgba(176, 38, 255, 0.2)"
        }
    ];

    return (
        <section id='testimonials' className="endorsement-section">
            <div className="endorsement-container">
                <div className="work-header">
                    <span className="work-tag">Testimonials</span>
                    <h2 className="work-title">Client Logs.</h2>
                </div>
                
                <div className="endorsements-grid">
                    {testimonialsData.map((item) => (
                        <SpotlightCard
                            key={item.id}
                            className="custom-spotlight-card"
                            spotlightColor={item.spotlightColor}
                        >
                            <div className="testimonial-content">
                                <p className="testimonial-text">"{item.text}"</p>

                                <div className="testimonial-meta">
                                    <h3>{item.name}</h3>
                                    <span>{item.project}</span>
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;