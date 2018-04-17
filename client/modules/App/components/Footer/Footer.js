import React from 'react';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Blood Donation &middot; <a href="/another">About</a></p>
      <p><div id="Message" /><a href="https://github.com/UdacityMobileWebScholarship/blood-donation" target="_blank">@github</a></p>
    </div>
  );
}

export default Footer;
