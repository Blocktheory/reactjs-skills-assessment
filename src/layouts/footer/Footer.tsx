import iconsPayment from '../../assets/img/icons_payment.png'
import logo from '../../assets/img/logo.svg'
import styles from './Footer.module.css'

export default function Footer() {
  const socialIcons = ['facebook', 'twitter', 'linkedin', 'instagram']

  const catalog = ['Necklaces', 'Hoodies', 'Jewelry Box', 'T-Shirt', 'Jacket']

  const aboutUs = [
    'Our Producers',
    'Sitemap',
    'FAQ',
    'About Us',
    'Terms & Conditions',
  ]

  const customerServices = [
    'Contact Us',
    'Track Your Order',
    'Product Care & Repair',
    'Book An Appointment',
    'Shipping & Returns',
  ]
  return (
    <footer>
      <section className={styles.top}>
        <div className={styles.topLogoSection}>
          <div className={styles.topLogo}>
            <img src={logo} alt="" />
          </div>
          <p className={styles.topDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            alias quos error nesciunt nam, ex recusandae illum dolore
            dignissimos sunt!
          </p>
          <div className={styles.topSocialIcons}>
            {socialIcons.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        </div>
        <div>
          <ul>
            <strong>CATALOG</strong>
            <br />
            <br />
            {catalog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <strong>ABOUT US</strong>
            <br />
            <br />
            {aboutUs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <strong>CUSTOMER SERVICES</strong>
            <br />
            <br />
            {customerServices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className={styles.bottom}>
        <div className={styles.bottomWrapper}>
          <small>©2024 Coral, Inc.</small>
          <div>
            <img width={220} src={iconsPayment} alt="" />
          </div>
          <small className={styles.scrollToTop}>Sroll To Top</small>
        </div>
      </section>
    </footer>
  )
}
