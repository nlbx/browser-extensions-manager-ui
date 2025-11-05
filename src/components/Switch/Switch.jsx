import styles from './Switch.module.css'

const Switch = ({checked, onChange, onChangeArg}) => {
  return (
    <input
        className={styles.switch}
        type="checkbox" 
        role="switch" 
        checked={checked}
        onChange={() => {
          onChange(onChangeArg);
        }}></input>
  )
}

export default Switch