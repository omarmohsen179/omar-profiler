import type { IconType } from 'react-icons'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaMedium } from 'react-icons/fa'

/**
 * Contact-form endpoint — a self-hosted PHP script that runs on your cPanel host and
 * emails you form submissions (no third-party service). The file lives at
 * `public/contact.php` and is served from the site root once deployed.
 *
 * Locally (npm run dev / preview) there's no PHP runtime, so the form will report a
 * network error — that's expected. It works once uploaded to cPanel.
 */
export const CONTACT_ENDPOINT = '/contact.php'

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
