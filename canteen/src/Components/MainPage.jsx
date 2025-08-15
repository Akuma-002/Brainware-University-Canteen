import { NavLink } from 'react-router-dom';
import loginBG from '../../public/assets/images/loginBG.png';
import pic1 from '../../public/web/chole-bhature-recipe.png'
import pic2 from '../../public/web/Egg Curry.png'
import pic3 from '../../public/web/Veg Biryani.png'

import React from 'react'; // We will create this CSS file
// Mock data for featured items
const featuredItems = [
    { name: 'Chole bhature', imageUrl: pic1, description: 'Grilled Chole, bacon, lettuce, and tomato.' },
    { name: 'Egg Curry', imageUrl: pic2, description: 'A mix of fresh veggies with a spicy kick.' },
    { name: 'Veg Biryani', imageUrl: pic3, description: 'Our signature coffee, chilled to perfection.' },
];

const MainPage = () => {
    return (
        <div className="main-page-container">
            {/* 1. Hero Section */}
            <section className="hero-section"  style={{
    position: "relative",
    height: "80vh",
    background: `url(${loginBG}) no-repeat center center/cover`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "white"
  }}>
                <div className="hero-content">
                    <h1>Fresh, Fast & Deliciously Simple</h1>
                    <p>Your campus go-to for a great meal, every time.</p>
                    <NavLink to="/home" className="hero-cta-button">Order Online Now</NavLink>
                </div>
            </section>

            {/* 2. "Why Choose Us?" Section */}
            <section className="features-section">
                <div className="feature-card">
                    <div className="feature-icon">🌿</div>
                    <h3>Fresh Daily</h3>
                    <p>We use locally-sourced ingredients to prepare our meals fresh every day.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">⚡</div>
                    <h3>Quick & Easy</h3>
                    <p>Order online and grab your meal in minutes. Perfect for a busy schedule.</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">💰</div>
                    <h3>Great Value</h3>
                    <p>Delicious food that’s affordable and satisfying, keeping you fueled for success.</p>
                </div>
            </section>

            {/* 3. Featured Items Section */}
            <section className="featured-items-section">
                <h2>Today's Featured Items</h2>
                <div className="items-grid">
                    {featuredItems.map((item, index) => (
                        <div key={index} className="item-card">
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Testimonial Section */}
            <section className="testimonial-section">
                <blockquote>
                    "The best sandwiches on campus, hands down. The online ordering is a lifesaver between classes!"
                </blockquote>
                <cite>- Alex R., Happy Student</cite>
            </section>

            {/* 5. Final CTA Section */}
            <section className="final-cta-section">
                <h2>Hungry Yet?</h2>
                <p>Explore our full menu and find your new favorite meal today.</p>
                <NavLink to="/home" className="hero-cta-button">View The Full Menu</NavLink>
            </section>
        </div>
    );
};

export default MainPage;