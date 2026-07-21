import { useRef, useState } from 'react'
import { submitLead } from '../utils/submitForm'
import { ymGoal } from '../utils/analytics'

const PRODUCT_Q = {
  key: 'product',
  title: 'Что вас интересует?',
  hint: 'Подберём решение под ваш формат.',
  options: [
    { label: 'Высотная ель (интерьер / улица)', value: 'tree' },
    { label: 'Электрогирлянды и иллюминация', value: 'garland' },
    { label: 'Ель + гирлянды комплексно', value: 'both' },
  ],
}

const TREE_QUESTIONS = [
  {
    key: 'loc',
    title: 'Где будет установлена ель?',
    hint: 'От этого зависит конструкция и материалы.',
    options: [
      { label: 'В помещении — интерьер', value: 'interior' },
      { label: 'На улице — открытая площадка', value: 'outdoor' },
    ],
  },
  {
    key: 'height',
    title: 'Какая нужна высота?',
    hint: 'Ориентировочно — уточним при расчёте.',
    options: [
      { label: 'До 3 метров', value: 'to3' },
      { label: '3–6 метров', value: '3-6' },
      { label: '6–12 метров', value: '6-12' },
      { label: 'Выше 12 метров', value: '12+' },
    ],
  },
  {
    key: 'decor',
    title: 'Что важно в декоре?',
    hint: 'Поможет подобрать комплектацию.',
    options: [
      { label: 'Встроенная подсветка / электрогирлянды', value: 'light' },
      { label: 'Брендирование в фирменном стиле', value: 'brand' },
      { label: 'Комплект декора «под ключ»', value: 'full' },
      { label: 'Только ель, без спецдекора', value: 'none' },
    ],
  },
]

const GARLAND_QUESTIONS = [
  {
    key: 'place',
    title: 'Где разместить гирлянды?',
    hint: 'От этого зависит тип и монтаж.',
    options: [
      { label: 'Фасад здания', value: 'facade' },
      { label: 'Деревья и аллеи', value: 'trees' },
      { label: 'Уличная площадка / периметр', value: 'area' },
      { label: 'Интерьер, витрины', value: 'indoor' },
    ],
  },
  {
    key: 'gtype',
    title: 'Какой тип гирлянд?',
    hint: 'Поможет подобрать комплектацию.',
    options: [
      { label: 'Бахрома', value: 'bahroma' },
      { label: 'Сеть-занавес (фасад)', value: 'net' },
      { label: 'Нить', value: 'string' },
      { label: 'Нужен подбор', value: 'any' },
    ],
  },
]

const COMMON_TAIL = [
  {
    key: 'purchase',
    title: 'Как планируете закупку?',
    hint: 'Определяет формат договора и документов.',
    options: [
      { label: 'Прямой договор (B2B)', value: 'direct' },
      { label: 'Тендер по 44-ФЗ / 223-ФЗ (B2G)', value: 'tender' },
    ],
  },
  {
    key: 'stage',
    title: 'На какой вы стадии?',
    hint: 'Подстроим предложение под готовность.',
    options: [
      { label: 'Есть ТЗ / чертежи', value: 'ready' },
      { label: 'Есть идея и бюджет', value: 'idea' },
      { label: 'Только присматриваюсь', value: 'early' },
      { label: 'Срочно — горят сроки', value: 'urgent' },
    ],
  },
]

function questionsFor(product) {
  if (product === 'garland') return [PRODUCT_Q, ...GARLAND_QUESTIONS, ...COMMON_TAIL]
  if (product === 'both') return [PRODUCT_Q, TREE_QUESTIONS[0], TREE_QUESTIONS[1], GARLAND_QUESTIONS[0], ...COMMON_TAIL]
  return [PRODUCT_Q, ...TREE_QUESTIONS, ...COMMON_TAIL]
}

const SEGMENTS = {
  gov: {
    color: '#243C60',
    title: 'Профиль: город / девелопер · B2G',
    text: 'Спроектируем и произведём высотную уличную ель по вашему ТЗ с расчётом ветровых и сейсмических нагрузок. Подготовим пакет документов для тендера (44-ФЗ / 223-ФЗ), смету и график монтажа под ключ.',
  },
  street: {
    color: '#AC4346',
    title: 'Профиль: уличная ель для вашей территории',
    text: 'Подберём или спроектируем уличную ель под площадку, рассчитаем нагрузки и организуем монтаж под ключ. Изготовим электрогирлянды для наружного освещения под ваш проект. Все грузы застрахованы на 100%.',
  },
  horeca: {
    color: '#C79A5B',
    title: 'Профиль: интерьер · HoReCa / бизнес',
    text: 'Подберём интерьерную ель (включая новинки — 5 м с интегрированным светом и 6 м ель-колонну), декор и электрогирлянды для интерьерного освещения в вашем фирменном стиле — можем встроить подсветку в конструкцию ели. Пожаробезопасные материалы с допуском для мест массового пребывания.',
  },
  illum: {
    color: '#C79A5B',
    title: 'Профиль: электрогирлянды / иллюминация',
    text: 'Изготовим морозостойкие светодиодные гирлянды под ваш объект — бахрому, сети-занавесы или нити. Рассчитаем длину и сценарий свечения под фасад или площадку, подготовим смету и организуем монтаж. Оптовые цены от производителя, для тендеров — пакет документов по 44-ФЗ / 223-ФЗ.',
  },
  both: {
    color: '#243C60',
    title: 'Профиль: ель + иллюминация под ключ',
    text: 'Спроектируем комплекс: высотную ель и электрогирлянды под вашу площадку в едином стиле. Рассчитаем нагрузки и сценарий свечения, подготовим смету и график монтажа. Для тендеров — пакет документов по 44-ФЗ / 223-ФЗ.',
  },
}

function segmentFor(answers) {
  if (answers.product === 'garland') return 'illum'
  if (answers.product === 'both') return 'both'
  const bigOutdoor = answers.loc === 'outdoor' && (answers.height === '6-12' || answers.height === '12+')
  if (answers.purchase === 'tender' || bigOutdoor) return 'gov'
  if (answers.loc === 'outdoor') return 'street'
  return 'horeca'
}

function answersSummary(questions, answers) {
  const summary = {}
  for (const q of questions) {
    const opt = q.options.find((o) => o.value === answers[q.key])
    if (opt) summary[q.title] = opt.label
  }
  return summary
}

export default function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState({})
  const [quizFormDone, setQuizFormDone] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const startedRef = useRef(false)
  const completedRef = useRef(false)

  const questions = questionsFor(answers.product)
  const total = questions.length
  const active = step < total
  const cur = questions[Math.min(step, total - 1)]
  const seg = segmentFor(answers)
  const segMeta = SEGMENTS[seg]
  const pct = Math.round((step / total) * 100)

  function pick(key, value) {
    if (!startedRef.current) {
      startedRef.current = true
      ymGoal('quiz_start')
    }
    const nextAnswers = { ...answers, [key]: value }
    const nextTotal = questionsFor(nextAnswers.product).length
    const next = step + 1
    setAnswers(nextAnswers)
    setStep(next)
    if (next >= nextTotal && !completedRef.current) {
      completedRef.current = true
      ymGoal('quiz_complete')
    }
  }
  function back() {
    if (step > 0) setStep((s) => s - 1)
  }
  function restart() {
    setStep(0)
    setAnswers({})
    setQuizFormDone(false)
  }
  async function quizSubmit(e) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const data = Object.fromEntries(new FormData(e.target))
      await submitLead(
        { ...data, 'Профиль': segMeta.title, ...answersSummary(questions, answers) },
        'Заявка из квиза на сайте Max Christmas',
      )
      ymGoal('form_submit')
      setQuizFormDone(true)
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="quiz-card" style={{ maxWidth: 1000, margin: '0 auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
        <div className="quiz-main">
          {active ? (
            <>
              <div className="fx ac jb" style={{ marginBottom: 14 }}>
                <span className="tag c-taupe">Вопрос {step + 1} из {total}</span>
                <span className="tag c-red">{pct}% пройдено</span>
              </div>
              <div className="prog"><div className="prog-in" style={{ width: `${pct}%` }} /></div>
              <h3 className="h3 c-navy" style={{ maxWidth: '24ch' }}>{cur.title}</h3>
              <p className="c-mut" style={{ margin: '8px 0 26px', fontSize: 15 }}>{cur.hint}</p>
              <div className="qopts">
                {cur.options.map((opt) => (
                  <button
                    key={opt.value}
                    className={'quiz-opt' + (answers[cur.key] === opt.value ? ' on' : '')}
                    onClick={() => pick(cur.key, opt.value)}
                  >
                    <span className="qmark" />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="fx ac gap16" style={{ marginTop: 30 }}>
                <button className="btn btn-ghost-d" onClick={back} style={{ visibility: step > 0 ? 'visible' : 'hidden' }}>
                  ← Назад
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="badge-new" style={{ background: segMeta.color }}>Ваш профиль определён</div>
              <h3 className="h3 c-navy" style={{ marginTop: 16, maxWidth: '22ch' }}>{segMeta.title}</h3>
              <p className="lead" style={{ marginTop: 14 }}>{segMeta.text}</p>
              {!quizFormDone ? (
                <form onSubmit={quizSubmit} style={{ marginTop: 26 }}>
                  <div className="form-grid">
                    <input className="fld" name="Имя" placeholder="Ваше имя" required />
                    <input className="fld" name="Телефон" placeholder="Телефон" required />
                  </div>
                  <input className="fld" name="Компания" style={{ marginTop: 14 }} placeholder="Компания / организация" />
                  <div className="fx ac gap16 wrap" style={{ marginTop: 20 }}>
                    <button type="submit" className="btn btn-red btn-lg" disabled={sending} style={{ opacity: sending ? 0.7 : 1 }}>
                      {sending ? 'Отправка…' : 'Получить персональный расчёт'}
                    </button>
                    <button type="button" className="btn btn-ghost-d" onClick={restart}>Пройти заново</button>
                  </div>
                  {error && (
                    <p style={{ fontSize: 13.5, marginTop: 14, color: '#AC4346' }}>
                      Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам напрямую.
                    </p>
                  )}
                </form>
              ) : (
                <div className="thanks" style={{ marginTop: 24, background: 'rgba(172,67,70,.08)', borderColor: 'rgba(172,67,70,.4)' }}>
                  <h3 className="h3 c-navy">Заявка принята ✓</h3>
                  <p style={{ margin: '10px 0 0', color: '#4a453d' }}>Менеджер свяжется с вами в течение рабочего дня и подготовит КП под ваш проект.</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
