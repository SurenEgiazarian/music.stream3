import logoDark from './img/logo__dark.png';
import logoLight from './img/logo__light.png';
import DarkTheme from './img/dark.png';
import LightTheme from './img/light.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useThemeContext } from '../theme/theme';
import styles from './navbar.module.css';
import cn from 'classnames';
import { logOut } from '../global';

export function NavBar() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => setVisible(!visible);
    
    const {theme, toggleTheme} = useThemeContext();
    
    return (
        <nav className={cn(styles.nav,styles[theme.name])}>
                    <div className={cn(styles.logo,styles[theme.name])}><NavLink to={`/`} className={cn(styles.link,styles[theme.name])}>
                        <img className={cn(styles.image,styles[theme.name])} src={theme.name === 'dark' ? logoDark : logoLight} alt="logo" />
                    </NavLink></div>
                    <div className={cn(styles.burger,styles[theme.name])} onClick={toggleVisibility}>
                        <span className={cn(styles.line,styles[theme.name])}></span>
                        <span className={cn(styles.line,styles[theme.name])}></span>
                        <span className={cn(styles.line,styles[theme.name])}></span>
                    </div>
                    {visible && (
                    <div className={cn(styles.menu,styles[theme.name])}>
                        <ul className={cn(styles.list,styles[theme.name])}>
                            <li className={cn(styles.item,styles[theme.name])}><NavLink to={`/`} className={cn(styles.link,styles[theme.name])}>Главное</NavLink></li>
                            <li className={cn(styles.item,styles[theme.name])}><NavLink to={`/mycollection`} className={cn(styles.link,styles[theme.name])}>Мой плейлист</NavLink></li>
                            <li className={cn(styles.item,styles.link,styles[theme.name])} onClick={logOut}> Выйти</li>
                            <li className={cn(styles.item,styles[theme.name])}><img src={theme.name === 'dark' ? DarkTheme : LightTheme} alt="theme" className={cn(styles.theme,)} onClick={toggleTheme}/></li>
                        </ul>
                    </div>
                    )}
                </nav>
                
    )
}