const YM_COUNTER_ID = 110509174

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
  })(window, document, 'script', `https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}`, 'ym')
  /* eslint-enable */

  window.ym(YM_COUNTER_ID, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    ecommerce: 'dataLayer',
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true,
  })
}

export function ymGoal(name) {
  if (typeof window === 'undefined' || typeof window.ym !== 'function') return
  window.ym(YM_COUNTER_ID, 'reachGoal', name)
}
