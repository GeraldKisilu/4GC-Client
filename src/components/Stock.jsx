import React from 'react';
import './Stock.css';

function Stock() {
    const featuredModels = [
        {
            name: "Audi A8",
            image: "https://www.audi.com/content/dam/ci/Models/A8/a8-limousine-2023/1920x1080_A8_Limousine.jpg",
            price: "From $88,600",
        },
        {
            name: "Audi Q8 e-tron",
            image: "https://www.audi.com/content/dam/ci/Models/Q8-e-tron/q8-e-tron-2023/1920x1080_Q8-e-tron.jpg",
            price: "From $74,400",
        },
        {
            name: "Audi R8 GT RWD",
            image: "https://www.audi.com/content/dam/ci/Models/R8/r8-gt-rwd/1920x1080_R8_GT_RWD.jpg",
            price: "From $207,900",
        },
    ];

    const agentDetails = {
        name: "Alex Johnson",
        title: "Senior Sales Agent",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@yourgarage.com",
        image: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    };

    return (
        <div className="stock-container">
            {/* Dashboard Header */}
            <header className="dashboard-header">
                <div className="logo-container">
                    <img src="https://www.audi.com/etc/designs/audi/site-common/static-assets/img/logo.svg" alt="Audi Logo" className="audi-logo" />
                </div>
                <nav className="dashboard-nav">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#new-stock" className="nav-link">New & Stock</a>
                    <a href="#garage" className="nav-link">My Garage</a>
                    <div className="dropdown">
                        <button className="nav-link dropbtn">Categories ▾</button>
                        <div className="dropdown-content">
                            <a href="#sedans">Sedans</a>
                            <a href="#suvs">SUVs</a>
                            <a href="#sportbacks">Sportbacks</a>
                            <a href="#coupes">Coupes</a>
                            <a href="#etron">e-tron (Electric)</a>
                        </div>
                    </div>
                </nav>
                <div className="dashboard-actions">
                    <button className="favorite-button">
                        <span role="img" aria-label="heart">❤️</span> My Favorites
                    </button>
                    <button className="login-button">
                        <span role="img" aria-label="user">👤</span> Login
                    </button>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="hero-section" id="home">
                    <div className="hero-content">
                        <h1 className="hero-title">Welcome to [Your Garage Name]</h1>
                        <p className="hero-subtitle">Premium Audi Customization & Care</p>
                        <button className="cta-button">Explore Models</button>
                    </div>
                </section>

                {/* Featured Audi Models */}
                <section className="featured-section">
                    <h2 className="section-title">Featured Models</h2>
                    <div className="model-grid">
                        {featuredModels.map((car, index) => (
                            <div className="model-card" key={index}>
                                <img src={car.image} alt={car.name} className="model-image" />
                                <h3>{car.name}</h3>
                                <p>{car.price}</p>
                                <button className="customize-button">Customize</button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Customization Options Preview */}
                <section className="customization-section">
                    <h2 className="section-title">Tailor Your Dream Audi</h2>
                    <div className="options-grid">
                        <div className="option-item">
                            <span role="img" aria-label="wheels">⚙️</span>
                            <p>Wheels & Performance</p>
                        </div>
                        <div className="option-item">
                            <span role="img" aria-label="colors">🎨</span>
                            <p>Paint & Finishes</p>
                        </div>
                        <div className="option-item">
                            <span role="img" aria-label="interiors">🏁</span>
                            <p>Interiors & Trim</p>
                        </div>
                    </div>
                    <button className="cta-button">Start Customizing</button>
                </section>

                {/* Agent Details */}
                <section className="agent-section">
                    <h2 className="section-title">Meet Your Agent</h2>
                    <div className="agent-card">
                        <img src={agentDetails.image} alt={agentDetails.name} className="agent-image" />
                        <div className="agent-info">
                            <h3>{agentDetails.name}</h3>
                            <p>{agentDetails.title}</p>
                            <p>📞 {agentDetails.phone}</p>
                            <p>📧 {agentDetails.email}</p>
                        </div>
                    </div>
                </section>

                {/* Payments & Financing */}
                <section className="payments-section">
                    <h2 className="section-title">Secure Payments & Financing</h2>
                    <div className="payment-logos">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="MasterCard" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" alt="Visa" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.svg" alt="PayPal" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/M-PESA_logo.svg" alt="Mpesa" />
                    </div>
                    <p>Seamless and secure transactions for all your purchases.</p>
                </section>

                {/* Customer Reviews / Testimonials */}
                <section className="testimonials-section">
                    <h2 className="section-title">What Our Clients Say</h2>
                    <div className="testimonial-container">
                        <blockquote>"The service was outstanding! My Audi A4 feels brand new and the customization options were exactly what I was looking for." - Sarah L.</blockquote>
                        <blockquote>"A truly premium experience from start to finish. The team at [Your Garage Name] is professional and knowledgeable." - Mark P.</blockquote>
                    </div>
                </section>

                {/* Gallery / Virtual Showroom */}
                <section className="gallery-section">
                    <h2 className="section-title">Our Virtual Showroom</h2>
                    <div className="gallery-grid">
                        <img src="https://www.audi.com/content/dam/ci/Models/A5/a5-coupe-2023/1920x1080_A5_Coupe.jpg" alt="Audi A5" />
                        <img src="https://www.audi.com/content/dam/ci/Models/Q4-e-tron/q4-e-tron-2023/1920x1080_Q4-e-tron.jpg" alt="Audi Q4 e-tron" />
                        <img src="https://www.audi.com/content/dam/ci/Models/A7/a7-sportback-2023/1920x1080_A7_Sportback.jpg" alt="Audi A7 Sportback" />
                    </div>
                </section>
            </main>

            {/* Call-to-Action Footer */}
            <footer className="footer-cta">
                <div className="footer-content">
                    <p>Ready to find your perfect Audi?</p>
                    <button className="cta-button">Book a Test Drive</button>
                    <div className="social-links">
                        <a href="#">Instagram</a> | <a href="#">YouTube</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Stock;