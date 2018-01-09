import React from 'react'
import Duck from '../assets/Duck.jpg'
import './Home.css'

const Home = () => (
  <div>
    <h4>Welcome!</h4>
    <img src={Duck} alt="this is a duck jpg" className="duck"/>
  </div>
)

export default Home
