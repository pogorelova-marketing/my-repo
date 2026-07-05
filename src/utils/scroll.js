export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.pageYOffset - 72
  window.scrollTo({ top: y, behavior: 'smooth' })
}
