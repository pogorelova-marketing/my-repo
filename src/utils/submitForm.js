const ENDPOINT = 'https://formsubmit.co/ajax/m.pogorelova@max-christmas.ru'

export async function submitLead(fields, subject) {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
    }),
  })
  if (!res.ok) throw new Error(`FormSubmit error: ${res.status}`)
  return res.json()
}
