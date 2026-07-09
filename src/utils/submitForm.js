// Google Sheet + Apps Script is the single source of truth for lead delivery:
// it logs every submission to the sheet AND emails it (via MailApp) in one
// server-side step, so the site no longer depends on FormSubmit's uptime.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzi-ylYgTMkWT-g8ypkbrVjd7A2xAgYqU6vbKuU8mwG5_XvQgkdDhnTJS1e3-HSXtA/exec'

export async function submitLead(fields, subject) {
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
