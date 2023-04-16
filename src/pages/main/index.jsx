import styles from './main.module.css';
import { PlaylistTitle } from '../../components/playlistTitle/playlistTitle.jsx';
import { SearchBar } from '../../components/search/search.jsx';
import { TrackList } from '../../components/trackList/trackList';
import { TrackNavBar } from '../../components/trackNav/trackNav.jsx';
import { NavBar } from '../../components/navbar/navbar.jsx';
import { SideBar } from '../../components/sideBar/sideBar';
// import { BottomPlayer } from '../../components/bottomPlayer/bottomPlayer.jsx';
import { Footer } from '../../components/footer/footer';
import { useEffect, useState } from 'react';
import { useThemeContext } from '../../components/theme/theme';
import cn from 'classnames';

export const Main = () => {

    const [pending, setPending] = useState(true);
        useEffect(() => {
            const timerId = setTimeout(setPending, 1000, false);
            return () => clearInterval(timerId)
            }, [])

            const {theme} = useThemeContext();

    return (
        <div className={cn(styles.container,styles[theme.name])}>
            <div className={cn(styles.main,styles[theme.name])}>
                <NavBar />
                    <div className={cn(styles.centerBlock,styles[theme.name])}>
                        <SearchBar />
                        <TrackNavBar PlaylistName = {`Треки`}  />
                        <PlaylistTitle/>
                        <TrackList loading = {pending}/>
                    </div>
                        <SideBar loading = {pending}/>
                        {/* <BottomPlayer/> */}
                        <Footer />
                    </div>
        </div>
)};