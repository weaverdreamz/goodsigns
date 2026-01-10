import React from 'react'
import p1 from '../assets/photo.jpg';
import p2 from '../assets/bet.jpg'
import p3 from '../assets/innovative.webp'
import p4 from '../assets/watch.jpg'

const sampleProjects = [
  { id: 1, title: 'MADE BY JHAY', desc: 'A simple stylish and user-friendly clothing shopping web app that makes discovering and buying fashion effortless. Users can explore collections, view product details, add items to their cart, and manage their orders with ease.The app is fully responsive and optimized for performance, providing a smooth shopping experience whether on desktop or mobile. It’s built to combine modern design with practical e-commerce functionality.', link: 'https://madebyjhay.netlify.app/', image: p1 },

  { id: 2, title: 'WEAVERBETS', desc: 'A project showcasing interactive UI built using only HTML,   CSS AND JAVASCRIPT ', link: 'https://weaverbets.netlify.app', image: p2 },

  { id:3, title: 'XCJECKS', desc: 'A Demo Project showcasing how modern tools like Animation on Scroll(AOS) can bring your web-app and website to life', link: 'https://jecks.netlify.app', image: p3},
  
  { id: 4, title: 'yourswatch', desc: 'Upcoming projects to launch. an e-commerce website that allows user to shop auctioned luxurous watches but at a low fixed price', link: 'https://yourswatch.netlify.app', image:p4},
]

export default function Projects() {
  return (
    <section className="page projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <article key={p.id} className="project-card">
              {p.image && (
                <img src={p.image} alt={p.title} className="project-thumb" />
              )}
              <div className="project-body">
                <a href={p.link}><h3>{p.title}</h3></a>
                <p>{p.desc}</p>
                <a className="btn" href={p.link}>View</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
