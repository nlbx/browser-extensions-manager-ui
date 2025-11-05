import Card from "../Card/Card"
import { useState, useEffect } from 'react'
import styles from './ExtensionManager.module.css'
import utils from '../../styles/utility.module.css'
import Button from "../Button/Button"
import { useTheme } from "../../contexts/ThemeContext.jsx"
 
import logo from '../../assets/images/logo.svg'
import logoDark from '../../assets/images/logo-dark.svg'
import iconMoon from '../../assets/images/icon-moon.svg'
import iconSun from '../../assets/images/icon-sun.svg'

const ExtensionManager = ({data, removeHandler, toggleActiveHandler}) => {
    const filters = {
        ALL: 'all',
        ACTIVE: true,
        INACTIVE: false
    }

    const {theme, toggleTheme} = useTheme();

    const [extensions, setExtensions] = useState(data);
    const [filter, setFilter] = useState(filters.ALL);

    useEffect(() => setExtensions(data), [data]);

    return (
        <div className={styles['app-container']} data-theme={theme}>
            <div className={`${styles['container']}`}>
                <div className={`${styles['manager-header']}`} data-theme={theme}>
                    <div>
                        <img src={theme === 'light'
                        ? logo
                        : logoDark}></img>
                    </div>
                    <Button
                        variant='theme'
                        onClick={toggleTheme}
                        icon= {
                            theme === 'light'
                            ? iconMoon
                            : iconSun
                        }>
                    </Button>
                </div>
                
                <div className={styles['list-header']}>
                    <h1 className={`${utils['fs-xl']} ${utils['fw-bold']}`}>Extensions List</h1>
                    <div className={styles['controls']}>
                        <Button 
                            variant={filter === filters.ALL ? 'toggle-pressed' : 'toggle'}
                            onClick={() => setFilter(filters.ALL)}>
                                All
                        </Button>
                        <Button 
                            variant={filter === filters.ACTIVE ? 'toggle-pressed' : 'toggle'}
                            onClick={() => setFilter(filters.ACTIVE)}>
                                Active
                        </Button>
                        <Button
                            variant={filter === filters.INACTIVE ? 'toggle-pressed' : 'toggle'}
                            onClick={() => setFilter(filters.INACTIVE)}>
                                Inactive
                        </Button>
                    </div>
                </div>

                <div className={styles['card-container']}>
                    {extensions
                        .filter((extension) => {
                            return filter === filters.ALL || extension.isActive === filter
                        }) 
                        .map((extension) => {
                            return (
                            <Card 
                                name = {extension.name}
                                logo = {extension.logo}
                                description = {extension.description}
                                isActive={extension.isActive}
                                key = {extension.name}
                                removeHandler = {removeHandler}
                                onActiveToggle={toggleActiveHandler}
                            />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default ExtensionManager