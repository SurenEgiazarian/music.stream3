import { WatchIcon } from '../icons.jsx'
import styles from './playlistTitle.module.css'
import { useThemeContext } from '../theme/theme';
import cn from'classnames'

export function PlaylistTitle () {
    const {theme} = useThemeContext();

    return(
        <div className={cn(styles.content,styles.playlist,styles[theme.name])}>
                            <div className={cn(styles.col01)}>Трек</div>
                            <div className={cn(styles.col02)}>ИСПОЛНИТЕЛЬ</div>
                            <div className={cn(styles.col03)}>АЛЬБОМ</div>
                            <div className={cn(styles.col04)}>
                                <svg className={cn(styles.titleSvg)} alt="time">
                                <WatchIcon className={cn(styles[theme.color])}/>
                                </svg>
                            </div>
                        </div>
    )
}