import React from 'react'
import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <section className="page about">
      <div className="container about-inner">
        <div className="about-media">
          <img src={profile} alt="Joseph Una" className="avatar avatar-md" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
           I’m Joseph Una, a front-end web developer dedicated to building high-quality, responsive, and SEO-friendly websites.

          I help businesses and individuals create strong online presences through well-designed and performance-focused web solutions. I value clear communication, attention to detail, and delivering results that meet real user needs.

          If you’re looking for a developer who cares about both design and functionality, you’re in the right place.
          </p>
          <p>Experienced with HTML, CSS, JavaScript, React.Js, Vite, Sass, Tailwindcss, Next.js Typescript, Git, Github  and modern web tooling.</p>
        </div>
      </div>
    </section>
  )
}
