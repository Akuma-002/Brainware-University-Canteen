import React from 'react'; // We will create this CSS file

// Mock data for the team members
const teamMembers = [
    { name: 'John Doe', role: 'Head Chef', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', role: 'Canteen Manager', imageUrl: 'https://via.placeholder.com/150' },
    { name: 'Sam Wilson', role: 'Lead Barista', imageUrl: 'https://via.placeholder.com/150' },
];

const AboutUsPage = () => {
    return (
        <div className="about-us-container">
            {/* 1. Hero Section */}
            <header className="about-hero">
                <div className="hero-content">
                    <h1>Welcome to Brainware Canteen</h1>
                    <p>Your daily dose of delicious, made with love and the freshest ingredients.</p>
                </div>
            </header>

            {/* 2. Our Story Section */}
            <section className="our-story-section">
                <div className="story-content">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2020, Brainware Canteen started with a simple idea: to provide our community with wholesome, delicious, and quick meals that feel like home. We believe that good food brings people together, and we've made it our mission to be a place where students, faculty, and friends can gather, recharge, and enjoy a great meal.
                    </p>
                    <p>
                        From our signature sandwiches to our freshly brewed coffee, every item on our menu is crafted with care, using locally-sourced ingredients whenever possible.
                    </p>
                </div>
                <div className="story-image">
                    <img src="https://studyriserr.com/images/editor/1737114457Picture2_2_11zon.jpg" alt="Inside the canteen" />
                </div>
            </section>

            {/* 3. Our Values Section */}
            <section className="our-values-section">
                <h2>What We Stand For</h2>
                <div className="values-grid">
                    <div className="value-card">
                        {/* Icon placeholder */}
                        <div className="value-icon">🌿</div>
                        <h3>Fresh Ingredients</h3>
                        <p>We partner with local suppliers to bring you the freshest produce, dairy, and meats every single day.</p>
                    </div>
                    <div className="value-card">
                        {/* Icon placeholder */}
                        <div className="value-icon">⚡</div>
                        <h3>Speedy Service</h3>
                        <p>We know you're busy. Our team is dedicated to getting your delicious meal to you quickly without compromising on quality.</p>
                    </div>
                    <div className="value-card">
                        {/* Icon placeholder */}
                        <div className="value-icon">❤️</div>
                        <h3>Community Focus</h3>
                        <p>We're more than just a canteen; we're a part of the community. We strive to create a warm and welcoming atmosphere for all.</p>
                    </div>
                </div>
            </section>

            
            {/* 5. Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to Grab a Bite?</h2>
                <a href="/home" className="cta-button">View The Menu</a>
            </section>
        </div>
    );
};

export default AboutUsPage;