const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/m.pogorelova@max-christmas.ru'

// TODO: paste the Google Apps Script Web App URL here once deployed
// (Sheets → Extensions → Apps Script → Deploy → New deployment → Web app).
const SHEET_ENDPOINT = ''

async function submitToFormsubmit(fields, subject) {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _cc: 'manager@max-christmas.ru',
    }),
  })
  if (!res.ok) throw new Error(`FormSubmit error: ${res.status}`)
  return res.json()
}

async function submitToSheet(fields, subject) {
  if (!SHEET_ENDPOINT) throw new Error('Sheet endpoint not configured yet')
  // Apps Script Web Apps don't return CORS headers, so we fire with mode:
  // 'no-cors' (can't read the response, but the request still lands and
  // doPost still runs) using a CORS-safelisted content type to skip preflight.
  await fetch(SHEET_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ ...fields, _subject: subject }),
  })
}

// Send to email and the backup sheet in parallel. As long as at least one
// channel gets through, the submission counts as delivered — a FormSubmit
// outage (like today's) no longer means a lost lead.
export async function submitLead(fields, subject) {
  const results = await Promise.allSettled([
    submitToFormsubmit(fields, subject),
    submitToSheet(fields, subject),
  ])
  const delivered = results.some((r) => r.status === 'fulfilled')
  if (!delivered) {
    throw new Error('All delivery channels failed')
  }
}
