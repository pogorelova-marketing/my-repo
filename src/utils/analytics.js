// TODO: replace with the real Яндекс.Метрика counter ID once created at metrika.yandex.ru,
// and update the matching noscript pixel in index.html to the same number.
const YM_COUNTER_ID = '00000000'

let initialized = false

export function initYandexMetrica() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  /* eslint-disable */
  ;(function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) }
    m[i].l = 1 * new Date()
    for (let j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) return
    }
    k = e.createElement(t)
    a = e.getElementsByTagName(t)[0]
    k.async = 1
    k.src = r
    a.parentNode.insertBefore(k, a)
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')
  /* eslint-enable */

  window.ym(YM_COUNTER_ID, 'init', {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
  })
}

export function ymGoal(name) {
  if (typeof window === 'undefined' || typeof window.ym !== 'function') return
  window.ym(YM_COUNTER_ID, 'reachGoal', name)
}
