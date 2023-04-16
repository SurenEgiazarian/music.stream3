import { SideBarSkeleton } from './skeleton/sideBar-skeleton'
import styles from './sideBar.module.css'
import playlistOne from './img/playlist01.png'
import playlistTwo from './img/playlist02.png'
import playlistThree from './img/playlist03.png'
import { useThemeContext } from '../theme/theme';
import { NavLink } from 'react-router-dom'
import cn from 'classnames'

export function SideBar({loading}) {
    const {theme} = useThemeContext();
 
    if (loading) {return <SideBarSkeleton/>}
    return(
        <div className={cn(styles.main,styles[theme.name])}>
        <div className={cn(styles.personal)}>
                <p className={cn(styles.personalName)}>Custom User</p>
                 <div className={cn(styles.avatar)}> </div>
        </div>
                    <div className={cn(styles.block)}>
                        <div className={cn(styles.list)}>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.link)} href=''>
                                    <NavLink to={`/mycollection/playlists/playlist-of-the-day`}>
                                    <img className={cn(styles.img)} src={playlistOne} alt="day's playlist" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.link)} href="#">
                                    <NavLink to={`/mycollection/playlists/best-dance-playlist`}>
                                    <img className={cn(styles.img)} src={playlistTwo} alt="day's playlist" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className={cn(styles.item)}>
                                <div className={cn(styles.link)} href="#">
                                    <NavLink to={`/mycollection/playlists/indie-playlist`}>
                                    <img className={cn(styles.img)} src={playlistThree} alt="day's playlist"/>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}