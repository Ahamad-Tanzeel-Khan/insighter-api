import React, { useEffect, useState } from 'react'
import './trending.css'
import MobileNav from '../MobileNav/MobileNav'
import { Link } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import InstaTrending from './InstaTrending/InstaTrending'
import "./trending.css"


const Trending = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <section className='trending-container global-container'>
      <div className={`trending-content-container ${screenWidth < 1025 ? '' : 'glass'}`}>
        <header className='overview-header-container'>
          <div className='overview-header'>
            <div className='overview-header-content'>
              <div className='overview-title'>
                <h1>Trending</h1>
                <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                  <img src={`/assets/social-icons/${selectedPlatform}.svg`} alt="" style={{marginLeft: "20px"}} height={20} width={20}/>
                  <select className="overview-time-select" value={selectedPlatform} onChange={handlePlatformChange} style={{cursor: "pointer"}}>
                      <option style={{background: "black"}} value="facebook">Facebook</option>
                      <option style={{background: "black"}} value="instagram">Instagram</option>
                      <option style={{background: "black"}} value="x">X</option>
                      <option style={{background: "black"}} value="youtube">YouTube</option>
                  </select>
                </div>
              </div>
              <span>Take a closer look at how your social media accounts are performing</span>
            </div>

            {/* Mobile Nav */}
            <div className='mobile-nav'>
              <Link to='/'>
                <img src="/assets/icons/logo.svg" alt="logo" width={150} height={70} />
              </Link>
            </div>

            <div className='nav-left-content'>
              <UserButton afterSignOutUrl='/' />
              <div className='ham'>
                <MobileNav />
              </div>
            </div>
          </div>
        </header>
        <section className='trending-cards-container'>
          <div className='trending-content'>
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
            <InstaTrending />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Trending