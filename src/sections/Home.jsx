import React from 'react'
import profile from '../assets/profile.jpg'

export default function Home() {
  return (
    <section className="page home">
      <div className="container home-hero">
        <div className="hero-content">
          <h1>Hi — I'm Joseph Una</h1>
          <p className="lead">I create Responsive and Dynamic user interface that guarantees fast load times and lag free interaction. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing and building awesome web apps and websites.</p>
          <p>Welcome to my portfolio. Check out my projects and skills using the navigation above.</p>
        </div>

        <div className="hero-media">
          <img src={profile} alt="Joseph" className="avatar avatar-lg" />
        </div>
      </div>
    </section>
  )
}
