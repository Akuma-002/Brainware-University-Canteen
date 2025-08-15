import React, { useState } from 'react';
import ProfileDetails from './ProfileDetails';
import OrderHistory from './OrderHistory';
import SecuritySettings from './SecuritySettings';

const UserProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return <ProfileDetails />;
            case 'orders':
                return <OrderHistory />;
            case 'security':
                return <SecuritySettings />;
            default:
                return <ProfileDetails />;
        }
    };

    return (
        <div className="user-profile-container">
            <header className="profile-header">
                <h1>My Account</h1>
            </header>
            <div className="user-page-layout">
                <nav className="user-nav">
                    <ul>
                        <li
                            className={activeTab === 'profile' ? 'active' : ''}
                            onClick={() => setActiveTab('profile')}
                        >
                            Profile
                        </li>
                        <li
                            className={activeTab === 'orders' ? 'active' : ''}
                            onClick={() => setActiveTab('orders')}
                        >
                            Order History
                        </li>
                        <li
                            className={activeTab === 'security' ? 'active' : ''}
                            onClick={() => setActiveTab('security')}
                        >
                            Security
                        </li>
                        <li className="logout-link">
                            <a href="/logout">Logout</a>
                        </li>
                    </ul>
                </nav>
                <main className="user-content">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default UserProfilePage;