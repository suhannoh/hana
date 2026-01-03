import commonStore from '../store/common'
import styles from './Theme.module.css'

export default function Theme() {
  const {theme, toggleTheme} = commonStore();
  return (
    <button className={styles.toggle}
            onClick={toggleTheme}
            aria-label="테마 전환">
      {theme ? '🌞' : '🌜'}
    </button>
  )
}
