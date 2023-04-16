import skeletonStyles from './bottomPlayer-skeleton.module.css'
import styles from '../bottomPlayer.module.css'
import {  PrevIcon,NextIcon,ShuffleIcon, RepeatIcon, PlayIcon, LikeIcon, DislikeIcon, VolumeIcon } from '../../icons.jsx'
import cn from 'classnames'

export function BottomPlayerSkeleton() {

    return(
        <div className={cn(styles.bar)}>
        <div className={cn(styles.playerProgress)}></div>
        <div className={cn(styles.playerBlock)}>
                            <div className={cn(styles.player)}>
                                <div className={cn(styles.controls)}>
                                    <div className={cn(styles.btnPrev)}>
                                        <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                            <PrevIcon />
                                        </svg>
                                </div>
                                <div className={cn(styles.btnPlay)}>
                                <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                    <PlayIcon class/>
                                </svg>
                                </div>
                                <div className={cn(styles.btnNext)}>
                                <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                    <NextIcon/>
                                </svg> 
                                </div>
                                <div className={cn(styles.btnRepeat,styles.btnIcon)}>
                                <svg className={cn(styles.trackPlaySvg)}>
                                    <RepeatIcon/>
                                </svg>
                                </div>
                                <div className={cn(styles.btnShuffle,styles.btnIcon)} >
                                <svg className={cn(styles.trackPlaySvg)}>
                                    <ShuffleIcon />
                                </svg> 
                                </div>
                            </div>
                            
                            <div className={cn(styles.trackPlay)}>
                                <div className={cn(styles.playContain)}>
                                    <div className={cn(styles.trackPlayImage,skeletonStyles.skeletonNote)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)} alt="music">
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayAuthor,skeletonStyles.skeletonTitle)}>
                                        <a className={cn(styles.trackPlayAuthorLink)} href="http://"></a>
                                    </div>
                                    <div className={cn(styles.trackPlayAlbum,skeletonStyles.skeletonTitle)}>
                                        <a className={cn(styles.trackPlayAlbumLink)}  href="http://"></a>
                                    </div>
                                </div>

                                <div className={cn(styles.trackPlayLikeDis)}>
                                    <div className={cn(styles.trackPlayLike,styles.btnIcon)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                            <LikeIcon/>
                                        </svg>
                                    </div>
                                    <div className={cn(styles.trackPlayDislike,styles.btnIcon)}>
                                    <svg className={cn(styles.trackPlaySvg)}>
                                            <DislikeIcon/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cn(styles.volumeBlock)}>
                           <div className={cn(styles.volumeContent)}>
                                <div className={cn(styles.volumeImage)}>
                                    <svg className={cn(skeletonStyles.trackPlaySvg)}>
                                        <VolumeIcon/>
                                    </svg>
                                </div>
                                <div className={cn(styles.volumeProgress)}>
                                    <input className={cn(styles.volumeProgressLine)} type="range" name="range" />
                                </div>
                                
                           </div>
                        </div>
                    </div>
                </div>
    )
}