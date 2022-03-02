import utilStyles from '../styles/utils.module.css'
import styles from '../styles/error.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>👽</div>
      <h1 className={`${utilStyles.headingMd} ${styles.error}`}>404 <span className={styles.bar}>|</span> Not Found</h1>
    </div>
  )
}