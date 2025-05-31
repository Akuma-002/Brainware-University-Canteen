import React from 'react';
import List from './List';
import { Outlet } from 'react-router-dom';
import bgImage from '/assets/images/image.png';

const Home = () => (
  <div className="mainBox">
    <div className="showBox" style={{ backgroundImage: `url(${bgImage})` }}></div>
    <List />
    <Outlet />
  </div>
);

export default Home;
