import { useState } from 'react'
import { submitLead } from '../utils/submitForm'

export default function FooterForm() {
  const [done, setDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  if (done) {
    return (
      <div className="thanks">
        <h3 className="h3 c-navy">Спасибо! Заявка отправлена ✓</h3>
        <p style={{ margin: '12px 0 0', color: '#4a453d' }}>
          Мы свяжемся с вами в течение рабочего дня и подготовим коммерческое предложение под ваш проект.
        </p>
      </div>
    )
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const data = Object.fromEntries(new FormData(e.target))
      await submitLead(data, 'Заявка на КП с сайта Max Christmas')
      setDone(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      className="card"
      style={{ padding: 'clamp(24px,3vw,36px)', borderRadius: 4 }}
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        <input className="fld" name="Имя" placeholder="Имя" required />
        <input className="fld" name="Телефон" placeholder="Телефон" required />
      </div>
      <input className="fld" name="Компания" style={{ marginTop: 14 }} placeholder="Компания / организация" />
      <select className="fld" name="Тип проекта" style={{ marginTop: 14 }}>
        <option>Интерьерная ель / декор (HoReCa)</option>
        <option>Высотная уличная ель</option>
        <option>Электрогирлянды под проект (улица / интерьер)</option>
      </select>
      <textarea
        className="fld"
        name="Задача"
        style={{ marginTop: 14, minHeight: 96, resize: 'vertical' }}
        placeholder="Кратко о задаче: высота, площадка, сроки"
      />
      <button type="submit" className="btn btn-red btn-lg" disabled={sending} style={{ marginTop: 18, width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}>
        {sending ? 'Отправка…' : 'Получить КП'}
      </button>
      {error && (
        <p style={{ fontSize: 13.5, margin: '14px 0 0', textAlign: 'center', color: '#AC4346' }}>
          Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам напрямую.
        </p>
      )}
      <p className="c-mut" style={{ fontSize: 12.5, margin: '14px 0 0', textAlign: 'center' }}>
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  )
}
