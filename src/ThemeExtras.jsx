import React, { useEffect, useState } from 'react'
import './theme-extras.css'

const EXTRA_THEMES = [
  { id: 'nord', name: 'Nord', note: 'Arctic, calm, and clear.', colors: ['#2e3440', '#88c0d0', '#eceff4'] },
  { id: 'dracula', name: 'Dracula', note: 'A little purple after dark.', colors: ['#282a36', '#bd93f9', '#f8f8f2'] },
  { id: 'ocean', name: 'Deep Ocean', note: 'Blue hour, way down deep.', colors: ['#071a2b', '#42b4d6', '#d8f3ff'] },
  { id: 'forest', name: 'Forest', note: 'Moss, fern, and evergreen.', colors: ['#101b16', '#8fbd74', '#edf5e8'] },
  { id: 'sunset', name: 'Desert Sunset', note: 'Warm skies, cool evenings.', colors: ['#24151b', '#ff9b71', '#ffe1a8'] },
  { id: 'paper', name: 'Paper & Ink', note: 'A soft page and a sharp pen.', colors: ['#f4ead8', '#b64f35', '#302923'] },
]

export default function ThemeExtras() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(() => {
    try { return localStorage.getItem('epsilon-theme') || 'worth' } catch { return 'worth' }
  })

  useEffect(() => {
    const closeOnEscape = event => { if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  function chooseTheme(id) {
    setSelected(id)
    try { localStorage.setItem('epsilon-theme', id) } catch { /* storage may be unavailable */ }
    // The main app owns its theme state; reload so it picks up this saved palette.
    window.location.reload()
  }

  return <div className="theme-extras">
    {open && <section className="theme-extras-panel" aria-label="Additional color themes">
      <div className="theme-extras-heading"><div><span className="theme-extras-kicker">A FRESH COAT OF PIXELS</span><h2>More palettes</h2></div><button className="theme-extras-close" aria-label="Close palettes" onClick={() => setOpen(false)}>×</button></div>
      <p className="theme-extras-copy">Six extra moods for your little arcade.</p>
      <div className="theme-extras-grid">{EXTRA_THEMES.map(theme => <button key={theme.id} className={`theme-extra-card ${selected === theme.id ? 'is-selected' : ''}`} onClick={() => chooseTheme(theme.id)} aria-pressed={selected === theme.id}>
        <span className="theme-extra-swatches">{theme.colors.map(color => <i key={color} style={{ background: color }} />)}</span>
        <span className="theme-extra-name">{theme.name}{selected === theme.id ? ' ✓' : ''}</span>
        <span className="theme-extra-note">{theme.note}</span>
      </button>)}</div>
    </section>}
    <button className="theme-extras-trigger" aria-expanded={open} onClick={() => setOpen(value => !value)}><span aria-hidden="true">✳</span> More themes</button>
  </div>
}
