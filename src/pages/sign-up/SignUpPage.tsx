import productShowcase from '../../assets/img/product-showcase.png'
import styles from './SignUpPage.module.css'
import SignUpForm from './components/SignUpForm'

export default function SignUpPage() {
  return (
    <div className={styles.signupPageContainer}>
      <div className={styles.left}>
        <img src={productShowcase} alt="Product showcase image" />
      </div>
      <div className={styles.right}>
        <SignUpForm />
      </div>
    </div>
  )
}
