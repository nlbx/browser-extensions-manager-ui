import Button from '../Button/Button'
import Switch from '../Switch/Switch'
import styles from './Card.module.css'
import { useTheme } from '../../contexts/ThemeContext'

const Card = ({name, logo, description, isActive, removeHandler, onActiveToggle}) => {
  const {theme} = useTheme();

  const images = import.meta.glob('../../assets/images/*.svg', {eager: true});
  const imageMap = new Map();
  Object.entries(images).forEach(([path, module]) => {
      const iconName = path.split('/').pop();
      imageMap[iconName] = module.default;
  });

  return (
    <div className={styles['card']} data-theme={theme}>
        <div className={styles['info']}>
          <img src={imageMap[logo.split('/').pop()]} alt={`${name} logo`}></img>
          <div>
            <p className={styles['name']}>{name}</p>
            <p className={styles['decription']} data-theme={theme}>{description}</p>
          </div>
        </div>
        <div className={styles['controls']}>
          <Button 
              onClick={removeHandler}
              onClickArg={name}>
              Remove
          </Button>
          <Switch 
            checked={isActive}
            onChange={onActiveToggle}
            onChangeArg={name}/>
        </div>
    </div>
  )
}

export default Card