import { useEffect, useRef, useState } from 'react'
import { scrollToId } from '../utils/scroll'
import logoDark from '../assets/logo-dark.png'

const LINKS = [
  { id: 'interior', label: 'Интерьер' },
  { id: 'outdoor', label: 'Улица' },
  { id: 'case', label: 'Кейс' },
  { id: 'trust', label: 'Гарантии' },
  { id: 'quiz', label: 'Подбор' },
]

export default function Header({ phone, telHref }) {
  const [open, setOpen] = useState(false)
  const burgerRef = useRef(null)
  const firstLinkRef = useRef(null)

  useEffect(() => {
    if (!open) return
    firstLinkRef.current?.focus()
    function onKeyDown(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  function goTo(id) {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          <img className="logo-img" src={logoDark} alt="Max Christmas" />
          <small>ФАБРИКА ЁЛЕЙ · СЕВАСТОПОЛЬ</small>
        </a>
        <nav className="nav">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`}>{l.label}</a>
          ))}
        </nav>
        <div className="hdr-r">
          <a className="hdr-tel" href={`tel:${telHref}`}>{phone}</a>
          <button className="btn btn-red" onClick={() => goTo('lead')}>Получить КП</button>
          <button
            ref={burgerRef}
            className="hdr-burger"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav className="mobile-nav">
          {LINKS.map((l, i) => (
            <a key={l.id} ref={i === 0 ? firstLinkRef : null} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href={`tel:${telHref}`} className="mobile-nav-tel" onClick={() => setOpen(false)}>{phone}</a>
        </nav>
      )}
    </header>
  )
}
