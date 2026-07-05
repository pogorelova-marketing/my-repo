import { useState } from 'react'

export default function FooterForm() {
  const [done, setDone] = useState(false)

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

  return (
    <form
      className="card"
      style={{ padding: 'clamp(24px,3vw,36px)', borderRadius: 4 }}
      onSubmit={(e) => {
        e.preventDefault()
        setDone(true)
      }}
    >
      <div className="form-grid">
        <input className="fld" placeholder="Имя" required />
        <input className="fld" placeholder="Телефон" required />
      </div>
      <input className="fld" style={{ marginTop: 14 }} placeholder="Компания / организация" />
      <select className="fld" style={{ marginTop: 14 }}>
        <option>Интерьерная ель / декор (HoReCa)</option>
        <option>Высотная уличная ель</option>
        <option>Тендер 44-ФЗ / 223-ФЗ</option>
        <option>Электрогирлянды под проект (улица / интерьер)</option>
      </select>
      <textarea
        className="fld"
        style={{ marginTop: 14, minHeight: 96, resize: 'vertical' }}
        placeholder="Кратко о задаче: высота, площадка, сроки"
      />
      <button type="submit" className="btn btn-red btn-lg" style={{ marginTop: 18, width: '100%', justifyContent: 'center' }}>
        Получить КП
      </button>
      <p className="c-mut" style={{ fontSize: 12.5, margin: '14px 0 0', textAlign: 'center' }}>
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
      </p>
    </form>
  )
}
