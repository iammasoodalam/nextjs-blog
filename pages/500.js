import utilStyles from '../styles/utils.module.css'
import styles from '../styles/error.module.css'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <div className={styles.emoji}>🖥</div>
      <h1 className={`${utilStyles.headingMd} ${styles.error}`}>500 <span className={styles.bar}>|</span> Internal Server Error</h1>
    </div>
  )
}