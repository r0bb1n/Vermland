import React from 'react'
import neon from '../images/greenneon.jpg'

const Home = () => {
  return (
    <div className="home" id="home">
        <div className="home__banner">
            <h2 className="home__scroll">Artist | Artist | Artist | Artist | Artist | Artist</h2>
        </div>
        <div className="hero">
        </div>
        <div className="home__text">
            <h1>Värm<span>lands</span>dansen</h1>
            <ul>
                <li id="location">Location: Karlskoga</li>
                <li id="dates">Dates: 7 - 9 August</li>
            </ul>
            <p>More information will come per email after purchase of ticket</p>
        </div>
    </div>
  )
}

export default Home