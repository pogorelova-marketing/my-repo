import Header from './components/Header'
import Quiz from './components/Quiz'
import FooterForm from './components/FooterForm'
import { scrollToId } from './utils/scroll'

import logoDark from './assets/logo-dark.png'
import heroOutdoor from './assets/hero-outdoor.jpg'
import interiorPremium from './assets/interior-premium.jpg'
import catVersal from './assets/cat-versal.jpg'
import catKupech from './assets/cat-kupech.jpg'
import outdoorNight from './assets/outdoor-night.jpg'
import exh2 from './assets/exh2.jpg'
import exh4 from './assets/exh4.jpg'
import sev1 from './assets/sev1.jpg'

const PHONE = '8 800 250-71-83'
const EMAIL = 'manager@max-christmas.ru'
const TEL_HREF = PHONE.replace(/[^+\d]/g, '')

function App() {
  return (
    <>
      <Header phone={PHONE} telHref={TEL_HREF} />

      {/* BLOCK 1 HERO */}
      <section className="hero" id="top">
        <img className="hero-img" src={heroOutdoor} alt="Высотная уличная ель" />
        <div className="hero-ov" />
        <div className="wrap hero-in">
          <div className="eyebrow c-gold">Фабрика-производитель · ели, декор и электрогирлянды «под ключ»</div>
          <h1 className="h1" style={{ marginTop: 20, maxWidth: '16ch' }}>
            Высотные ели, декор и электрогирлянды для городов, отелей и бизнеса
          </h1>
          <p className="lead" style={{ color: '#e7e0d3', marginTop: 22, maxWidth: '62ch', fontFamily: 'Manrope', fontStyle: 'normal' }}>
            Проектируем и производим высотные интерьерные и уличные ели любой высоты. Новогодний дизайн «под ключ» для вашего бизнеса.
          </p>
          <div className="hero-cta">
            <button className="btn btn-red btn-lg" onClick={() => scrollToId('quiz')}>Подобрать ель за 60 секунд →</button>
            <button className="btn btn-ghost btn-lg" onClick={() => scrollToId('lead')}>Получить КП и смету</button>
          </div>
          <div className="trust-bar">
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A5B" strokeWidth="1.6"><path d="M3 21V9l9-6 9 6v12" /><path d="M9 21v-6h6v6" /></svg>
              Собственное производство · Севастополь
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A5B" strokeWidth="1.6"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
              100% страховка грузов ТК
            </div>
            <div className="trust-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C79A5B" strokeWidth="1.6"><path d="M4 6h16M4 12h16M4 18h10" /></svg>
              Работаем по 44-ФЗ и 223-ФЗ
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2 QUIZ */}
      <section className="sec bg-cream" id="quiz">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 46px' }}>
            <div className="eyebrow c-red">Квиз · 60 секунд</div>
            <h2 className="h2 c-navy" style={{ marginTop: 16 }}>Подберём решение и рассчитаем стоимость</h2>
            <p className="lead" style={{ marginTop: 16 }}>
              Ответьте на 5 вопросов — мы определим формат вашего проекта и подготовим предложение с учётом закупки, высоты и декора.
            </p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* BLOCK 3 INTERIOR */}
      <section className="sec bg-beige" id="interior">
        <div className="wrap">
          <div className="two">
            <div className="media-tall"><img src={interiorPremium} alt="Премиальная интерьерная ель" /></div>
            <div>
              <div className="eyebrow c-taupe">Направление 01 · Интерьерные высотные ели</div>
              <h2 className="h2 c-navy" style={{ marginTop: 16 }}>
                Новогодний дизайн интерьера{' '}
                <span className="serif c-red" style={{ fontStyle: 'italic', fontWeight: 600 }}>«под ключ»</span>
              </h2>
              <p className="lead" style={{ marginTop: 18 }}>
                Для отелей, ресторанов, ТРЦ и бизнес-центров: эксклюзивные интерьерные ели, электрогирлянды для интерьерного освещения, комплекты декора и украшения в вашем фирменном стиле — от эскиза до установки.
              </p>
              <div className="fx wrap gap10" style={{ marginTop: 22 }}>
                <span className="chip">Отели</span>
                <span className="chip">Рестораны</span>
                <span className="chip">ТРЦ</span>
                <span className="chip">Бизнес-центры</span>
              </div>
              <ul className="flist">
                <li><span className="fi" /><span><b>Новинки сезона:</b> ель 5 м с интегрированной подсветкой и ель-колонна 6 м.</span></li>
                <li><span className="fi" /><span><b>Ель со встроенной электрогирляндой</b> — без свисающих заметных проводов, экономия времени на монтаже.</span></li>
                <li><span className="fi" /><span>Электрогирлянды под ваш проект для интерьерного освещения — размер и сценарий свечения на выбор.</span></li>
                <li><span className="fi" /><span>Комплекты декора и украшения в вашем корпоративном стиле, соответствие брендбуку.</span></li>
                <li><span className="fi" /><span>Пожаробезопасные материалы — допуск для мест массового пребывания людей.</span></li>
              </ul>
              <div className="fx wrap gap16" style={{ marginTop: 32 }}>
                <button className="btn btn-red" onClick={() => scrollToId('lead')}>Обсудить проект</button>
                <a className="btn btn-ghost-d" href="https://maxchristmas-store.ru/iskusstevennye_eli/vysotnye_eli/" target="_blank" rel="noopener noreferrer">Смотреть каталог елей →</a>
              </div>
            </div>
          </div>
          <div className="cat-grid">
            <a className="cat-item" href="https://maxchristmas-store.ru/iskusstevennye_eli/vysotnye_eli/" target="_blank" rel="noopener noreferrer">
              <img src={catVersal} alt="Версальская" />
              <div className="cat-cap"><div className="tag c-cream" style={{ opacity: .7 }}>Серия</div><div className="serif" style={{ fontSize: 22 }}>Версальская</div></div>
            </a>
            <a className="cat-item" href="https://maxchristmas-store.ru/iskusstevennye_eli/vysotnye_eli/" target="_blank" rel="noopener noreferrer">
              <img src={catKupech} alt="Купеческая" />
              <div className="cat-cap"><div className="tag c-cream" style={{ opacity: .7 }}>Серия</div><div className="serif" style={{ fontSize: 22 }}>Купеческая</div></div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOCK 4 OUTDOOR */}
      <section className="sec bg-navy" id="outdoor">
        <div className="wrap">
          <div className="two">
            <div>
              <div className="eyebrow c-gold">Направление 02 · Уличные высотные ели</div>
              <h2 className="h2 c-cream" style={{ marginTop: 16 }}>Уличные высотные ели любой сложности — по вашему ТЗ</h2>
              <p className="lead c-mut2" style={{ marginTop: 18, color: '#cfc7b7' }}>
                Для городских администраций, девелоперов и парков. Проектируем и производим уличные ели с полным инженерным расчётом и монтажом под ключ.
              </p>
              <ul className="flist">
                <li><span className="fi" /><span className="c-cream">Индивидуальное проектирование конструкции под ваше ТЗ и площадку.</span></li>
                <li><span className="fi" /><span className="c-cream">Инженерия: расчёт ветровых и сейсмических нагрузок.</span></li>
                <li><span className="fi" /><span className="c-cream">Официальный участник тендеров — работаем по 44-ФЗ и 223-ФЗ.</span></li>
                <li><span className="fi" /><span className="c-cream">Электрогирлянды для наружного освещения — производим под проект площадки.</span></li>
                <li><span className="fi" /><span className="c-cream">Монтаж под ключ, включая высотные работы и установку кранами.</span></li>
              </ul>
              <h3 className="h3 c-cream" style={{ fontSize: 22, marginTop: 34 }}>Дизайнерские ёлки 2026 года</h3>
              <div className="newbox" style={{ marginTop: 16 }}>
                <div className="newcard">
                  <img className="newcard-media" src={exh2} alt="Ель 5 м с интегрированным светом" />
                  <div className="newcard-b">
                    <div className="badge-new">Новинка</div>
                    <div className="serif c-cream" style={{ fontSize: 24, marginTop: 12 }}>Ель 5 м</div>
                    <div className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14, marginTop: 4 }}>с интегрированным светом в конструкции</div>
                  </div>
                </div>
                <div className="newcard">
                  <img className="newcard-media" src={exh4} alt="Ель-колонна 6 м" />
                  <div className="newcard-b">
                    <div className="badge-new">Новинка</div>
                    <div className="serif c-cream" style={{ fontSize: 24, marginTop: 12 }}>Ель-колонна 6 м</div>
                    <div className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14, marginTop: 4 }}>компактная форма для площадей и атриумов</div>
                  </div>
                </div>
              </div>
              <div className="fx wrap gap16" style={{ marginTop: 32 }}>
                <button className="btn btn-red" onClick={() => scrollToId('quiz')}>Рассчитать проект по ТЗ →</button>
              </div>
            </div>
            <div>
              <div className="media-tall"><img src={outdoorNight} alt="Высотная уличная ель ночью" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 5 CASE — the flagship project gets the page's one dramatic
          type moment: a full-width numeral lead-in before the standard
          two-column body, so it reads as the peak, not another module. */}
      <section className="sec bg-cream" id="case">
        <div className="wrap">
          <div className="eyebrow c-red">Наши работы</div>
          <h2 className="case-num-row">
            <span className="case-num">20 м</span>
            <span className="case-num-sub">
              <span className="case-num-title">«Морская ёлка»</span>
              <span className="case-num-city">для Севастополя</span>
            </span>
          </h2>
          <div className="two case-body" style={{ alignItems: 'center' }}>
            <p className="lead">
              От эскиза и инженерных чертежей — через производство в цехах — до монтажа кранами и торжественного зажжения. Полный цикл силами фабрики: конструкция с расчётом нагрузок и фирменный «морской» декор — якоря, штурвалы, парусники.
            </p>
            <div className="case-photo"><img src={sev1} alt="20-метровая Морская ёлка в Севастополе" /></div>
          </div>
          <div className="fx wrap gap16 ac" style={{ marginTop: 40 }}>
            <a className="btn btn-ghost-d" href="https://maxchristmas-store.ru/articles/eksklyuzivnaya_morskaya_yelka_dlya_sevastopolya_/" target="_blank" rel="noopener noreferrer">Читать полный кейс →</a>
            <span className="c-mut" style={{ fontSize: 14 }}>Эскизы · чертежи · фото цехов · видео зажжения</span>
          </div>
        </div>
      </section>

      {/* BLOCK 6 TRUST */}
      <section className="sec bg-navy" id="trust">
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow c-gold">Почему фабрика, а не посредник</div>
            <h2 className="h2 c-cream" style={{ marginTop: 16 }}>Берём на себя риски проекта — от расчёта до доставки</h2>
          </div>
          <div className="tcards">
            <div className="tcard">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M6 21V8l6-4 6 4v13" /><path d="M9 12l2 2 4-4" /></svg>
              <h3 className="h3 c-cream" style={{ fontSize: 20 }}>Инженерные расчёты</h3>
              <p className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14.5, marginTop: 10 }}>Расчёт ветровых нагрузок для каждой высотной конструкции.</p>
            </div>
            <div className="tcard">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3 2 3 4 3 4 3s-2-3 0-9z" /></svg>
              <h3 className="h3 c-cream" style={{ fontSize: 20 }}>Пожаробезопасность</h3>
              <p className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14.5, marginTop: 10 }}>Сертифицированные негорючие материалы — допуск для мест массового пребывания.</p>
            </div>
            <div className="tcard">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
              <h3 className="h3 c-cream" style={{ fontSize: 20 }}>100% страховка грузов</h3>
              <p className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14.5, marginTop: 10 }}>Все отгрузки застрахованы транспортными компаниями — доставка без рисков.</p>
            </div>
            <div className="tcard">
              <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 20V9l4-2 4 2 4-2 4 2v11z" /><path d="M9 20v-5h6v5" /></svg>
              <h3 className="h3 c-cream" style={{ fontSize: 20 }}>Стабильность фабрики</h3>
              <p className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14.5, marginTop: 10 }}>Собственное производство и оптимизированные графики — сроки соблюдаются.</p>
            </div>
          </div>
          <div className="stats">
            <div className="stat"><div className="num-serif">24</div><div className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14, marginTop: 8 }}>года на рынке</div></div>
            <div className="stat"><div className="num-serif">100%</div><div className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14, marginTop: 8 }}>страховка грузов</div></div>
            <div className="stat"><div className="num-serif">44·223</div><div className="c-mut2" style={{ color: '#cfc7b7', fontSize: 14, marginTop: 8 }}>ФЗ · работа с тендерами</div></div>
          </div>
        </div>
      </section>

      {/* BLOCK 7 FOOTER FORM */}
      <section className="sec bg-beige" id="lead">
        <div className="wrap">
          <div className="foot-form">
            <div>
              <div className="eyebrow c-red">Получить КП</div>
              <h2 className="h2 c-navy" style={{ marginTop: 16 }}>Коммерческое предложение под ваш проект</h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: '46ch' }}>
                Оставьте контакты — подготовим расчёт с учётом высоты, декора и способа закупки. Для тендеров сформируем пакет документов по 44-ФЗ / 223-ФЗ.
              </p>
              <div className="fx wrap gap10" style={{ marginTop: 26 }}>
                <span className="chip">Ответ в течение рабочего дня</span>
                <span className="chip">Смета и сроки</span>
                <span className="chip">Договор / тендер</span>
              </div>
            </div>
            <div>
              <FooterForm />
            </div>
          </div>
          <div className="foot-b">
            <img src={logoDark} alt="Max Christmas" style={{ height: 20, width: 'auto' }} />
            <div className="fx wrap gap24">
              <a className="link-u" href={`tel:${TEL_HREF}`}>{PHONE}</a>
              <a className="link-u" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>Севастополь · собственное производство</span>
            </div>
            <div style={{ fontSize: 13 }}>© 2013–2026 Max Christmas</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
