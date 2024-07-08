// sanitizers/sanitize.js

import DOMPurify from 'dompurify'

export function sanitizeHTML(html) {
  return DOMPurify.sanitize(html)
}
