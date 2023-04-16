import styles from '../sideBar.module.css'
import { useThemeContext } from '../../theme/theme';
import stylesSkeleton from './sideBar-skeleton.module.css'
import cn from 'classnames'

export function SideBarSkeleton() {
    const {theme} = useThemeContext();
    return(
        <div className={cn(styles.main)}>
        <div className={cn(styles.personal)}>
                        <p className={cn(styles.personalName)}></p>
                        <div className={cn(stylesSkeleton.avatarSkeleton,styles[theme.color])}>
                            
                        </div>
                    </div>
                    <div className={cn(styles.block)}>
                        <div className={cn(styles.list)}>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                    <div className={cn(stylesSkeleton.imgSkeleton,styles[theme.color])} src='' alt="day's playlist" />
                                </a>
                            </div>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                <div className={cn(stylesSkeleton.imgSkeleton,styles[theme.color])}  alt="day's playlist" />
                                </a>
                            </div>
                            <div className={cn(styles.item)}>
                                <a className={cn(styles.link)} href="#">
                                <div className={cn(stylesSkeleton.imgSkeleton)} alt="day's playlist"/>
                                </a>
                            </div>
                        </div>
                        </div>
                        </div>
   )
}