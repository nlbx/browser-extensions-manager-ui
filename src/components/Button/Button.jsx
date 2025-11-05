import styles from './Button.module.css'
import { useTheme } from '../../contexts/ThemeContext'

const Button = ({children, variant = 'primary', onClick, onClickArg = [], icon}) => {
  const {theme} = useTheme();

  const variants = {
    'primary': `${styles['button']} ${styles['primary']}`,
    'toggle': `${styles['button']} ${styles['toggle']}`,
    'toggle-pressed': `${styles['button']} ${styles['toggle-pressed']}`,
    'theme': `${styles['button']} ${styles['theme']}`
  }

  return (
    <button onClick={() => onClick(onClickArg)} className={variants[variant]} data-theme={theme}>
        {children}
        {icon && <img src={icon}></img>}
    </button>
  )
}

export default Button