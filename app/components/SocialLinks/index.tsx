import { FaInstagram, FaFacebookF } from 'react-icons/fa'

import styles from './SocialLinks.module.sass'

export default function SocialLinks({ variant = 'header' }) {
  return (
    <div className={`${styles.socials} ${styles[variant]}`}>
      <a
        href="https://www.instagram.com/pushdentback"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61579031229110"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </a>
    </div>
  )
}
