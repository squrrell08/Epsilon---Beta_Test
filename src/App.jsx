import { useState } from 'react'

const milestones = [
  { number: '01', title: 'The home base', text: 'A place to land, look around, and get a feel for the world of Epsilon.', state: 'YOU ARE HERE' },
  { number: '02', title: 'The first worlds', text: 'Small, thoughtful games made for a quick break or a longer stay.', state: 'IN THE WORKS' },
  { number: '03', title: 'More to discover', text: 'New ideas, new places, and new reasons to come back.', state: 'ON THE HORIZON' },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Epsilon home">
        <span className="wordmark-symbol">ε</span><span>EPSILON</span>
      </a>
      <button className="mobile-menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}>
        <span /><span />
      </button>
      <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#roadmap" onClick={closeMenu}>The journey</a>
      </nav>
      <a className="header-note" href="#roadmap"><span className="live-dot" /> A NEW ARCADE IS TAKING SHAPE</a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="overline"><span className="overline-line" /> A LITTLE WORLD OF PLAY</div>
          <h1>Good things<br />are <span>in play.</span></h1>
          <p className="hero-intro">Epsilon is an independent little corner of the internet for games, playful ideas, and the joy of one more try.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#about">Get to know Epsilon <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#roadmap">See what’s ahead <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-footnote"><span className="footnote-icon">✳</span> A work in progress, made with care.</div>
        </div>

        <div className="hero-art" aria-label="Abstract Epsilon arcade illustration" role="img">
          <div className="art-grid" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="planet"><span>ε</span></div>
          <div className="spark spark-one">✳</div><div className="spark spark-two">✦</div><div className="spark spark-three">·</div>
          <div className="art-label art-label-top">INSERT CURIOSITY</div>
          <div className="art-label art-label-bottom"><span>PRESS START</span><i /></div>
          <div className="art-index">001 / ∞</div>
        </div>
        <div className="hero-coordinate">A PLACE FOR PLAYFUL MINDS <span>·</span> EST. 2025</div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label"><span>01</span> / THE IDEA</div>
        <div className="intro-content">
          <h2>Not just a collection<br />of games. <em>A feeling.</em></h2>
          <div className="intro-detail"><p>Epsilon is being built as a welcoming home for small, satisfying games. No noise, no rush—just curious ideas and a little room to play.</p><p>We’re starting with the foundation. The worlds will come next.</p></div>
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="roadmap-heading"><div><div className="section-label"><span>02</span> / WHAT'S NEXT</div><h2>One step at a time.</h2></div><p>Every good world starts<br />with a first page.</p></div>
        <div className="milestone-list">{milestones.map(item => <article className="milestone" key={item.number}>
          <span className="milestone-number">{item.number}</span>
          <div className="milestone-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
          <span className={`milestone-state ${item.number === '01' ? 'current' : ''}`}><i />{item.state}</span>
        </article>)}</div>
      </section>

      <section className="closing-card">
        <div className="closing-orbit" aria-hidden="true">ε</div>
        <div className="closing-copy"><div className="overline"><span className="overline-line" /> THE BEGINNING</div><h2>There’s room<br />for one more.</h2></div>
        <a className="button button-light" href="#home">Back to the top <span aria-hidden="true">↑</span></a>
      </section>
    </main>

    <footer className="site-footer"><a className="wordmark footer-mark" href="#home"><span className="wordmark-symbol">ε</span><span>EPSILON</span></a><span className="footer-caption">A SMALL CORNER OF THE INTERNET, STILL UNFOLDING.</span><a className="footer-top" href="#home">BACK UP ↑</a></footer>
  </div>
}
