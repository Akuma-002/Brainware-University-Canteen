import React, { useState, useContext } from 'react';
import { LoginDataContext } from '../Context/LoginContext';
import { UserDataContext } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ProfileDetails = () => {
    const userData = useContext(UserDataContext);
    const navigate = useNavigate();
    const { loginStatus, name, setName, email, setEmail, phoneNumber, setPhoneNumber, setStudentCode, password, setPassword, avatar, setAvatar, role, setRole, cart, setCart, orders, setOrders } = userData;
    
    if (!loginStatus) {
        return <Navigate to="/login" />;
    }
    
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: name,
        email: email,
        phone: phoneNumber || '', // Default to empty string if phoneNumber is 0
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', formData);
        setIsEditing(false);
    };

    return (
        <div className="profile-details-card">
            <h2>Profile Details</h2>
            {!isEditing ? (
                <>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="save-btn">Save Changes</button>
                        <button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ProfileDetails;