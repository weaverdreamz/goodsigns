import React from 'react'

const skills = [
  { name: 'HTML5', pct: 95 },
  { name: 'CSS / Sass', pct: 90 },
  { name: 'JavaScript', pct: 80 },
  { name: 'React', pct: 85 },
  { name: 'TypeScript', pct: 80 },
  { name: 'Vite', pct: 80 },
  { name: 'Tailwindcss', pct: 95},
  {name: 'Nextjs', pct:80},
  {name: 'Git/Github', pct:90}
  
]

export default function Skills() {
  return (
    <section className="page skills">
      <div className="container">
        <h2>Skills</h2>

        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-item" key={s.name}>
              <div className="skill-head">
                <span className="skill-name">{s.name}</span>
                <span className="skill-pct">{s.pct}%</span>
              </div>

              <div
                className="skill-bar"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={s.pct}
                aria-label={`${s.name} skill level`}
              >
                <div
                  className="skill-fill"
                  style={{ width: `${s.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

