import styles from '../trackList.module.css'
import { useThemeContext } from '../../theme/theme';
import skeletonStyles from './trackList-skeleton.module.css'
import cn from 'classnames'

export function TrackListSkeleton() {
    const {theme} = useThemeContext();
    return(
        <div className={cn(styles.content)}>
            {Array.from(new Array(14)).map((_, key) => (
                    <div className={cn(styles.item) } key = {key}>
                        <div className={cn(styles.track)}>
                            <div className={cn(styles.title)}>
                                <div className={cn(skeletonStyles.skeletonNote,styles.titleImage,styles[theme.color])}></div>
                                <div className={cn(skeletonStyles.skeletonTitle,styles.titleText,styles[theme.color])}></div>
                            </div>
                                <div className={cn(skeletonStyles.skeletonName,styles.author,styles[theme.color])}></div>
                                <div className={cn(skeletonStyles.skeletonAlbum,styles.album,styles[theme.color])}></div>
                        </div>
                    </div>))}
        </div>
    )
}