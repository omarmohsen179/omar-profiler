import type { IconType } from 'react-icons'
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaMedium } from 'react-icons/fa'

/**
 * Contact-form endpoint — handled by the Cloudflare Worker in `worker/index.js`, which
 * emails submissions through the contact@omarmohsen.dev mailbox (SMTP). The mailbox
 * password is a Cloudflare secret (SMTP_PASS), never shipped to the browser.
 *
 * Locally, `npx wrangler dev` runs the Worker; plain `npm run dev` has no backend.
 */
export const CONTACT_ENDPOINT = '/api/contact'

export type ContactLink = {
  label: string
  value: string
  href: string
  icon: IconType
}

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'contact@omarmohsen.dev',
    href: 'mailto:contact@omarmohsen.dev',
    icon: FiMail,
  },
  {
    label: 'Phone',
    value: '+20 109 598 6507',
    href: 'tel:+201095986507',
    icon: FiPhone,
  },
  {
    label: 'LinkedIn',
    value: 'in/omar-mohsen',
    href: 'https://www.linkedin.com/in/omar-mohsen-50a64a21a',
    icon: FiLinkedin,
  },
  {
    label: 'GitHub',
    value: 'omarmohsen179',
    href: 'https://github.com/omarmohsen179',
    icon: FiGithub,
  },
  {
    label: 'Medium',
    value: '@mohsenomar350',
    href: 'https://medium.com/@mohsenomar350',
    icon: FaMedium,
  },
]
