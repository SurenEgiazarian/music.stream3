import styles from './trackNav.module.css'
import { useState } from 'react';
import { useThemeContext } from '../theme/theme';
import { 
    filterByYear, 
    addFilterByAuthor,
    addFilterByGenre,
    deleteAuthors,
    deleteGenres 
} from '../../store/slices/filter';
import { useDispatch, useSelector } from 'react-redux';

import cn from 'classnames';

const initialState = {author: false, year: false, genre: false}
export function TrackNavBar ({PlaylistName}) {

    const [visible, setVisible] = useState(initialState);

    const toggleVisibility = (key) => () => setVisible({...initialState, [key]: !visible[key]});
    const {theme} = useThemeContext();
    const genres = useSelector((state) => state.filter.genres);
    const authors = useSelector((state) => state.filter.authors);
    const dispatch = useDispatch();

    const onYearFilter = (e) => {
        dispatch(filterByYear((e.target).value));
    };
    const onAuthorFilter = (e) => {
        if (e.target.checked ) {
            dispatch(addFilterByAuthor((e.target).value));
        } else {
            dispatch(deleteAuthors((e.target).value));
    }
    };
    const onGenreFilter = (e) => {
        if (e.target.checked ) {
            dispatch(addFilterByGenre((e.target).value));
        } else {
            dispatch(deleteGenres((e.target).value));
    }
    };

    if (PlaylistName !== `Треки`) { return (
        <h2 className={cn(styles.h2,styles[theme.name])}>{PlaylistName}</h2>
    )
    }
    return (
        <div>
        <h2 className={cn(styles.h2,styles[theme.name])}>{PlaylistName}</h2>
        <div className={cn(styles.center,styles[theme.name])}>
        <div className={cn(styles.title)}>Искать по:</div>
        <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.author})} onClick={toggleVisibility('author')}>исполнителю</div>
        {visible.author && (
            <div className ={cn(styles.list)}>
                <ul className={cn(styles.listActual)}>
                    {authors.map((author) => (
                        <li className ={cn(styles.listItem,styles.btnText)} key = {author} >
                            <label className={cn(styles.listItem,styles.btnText)} id={author}>
                                <input className={cn(styles.listInput)} id={author} type="checkbox" onClick={onAuthorFilter} value={author}></input>
                                {author}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            )}
            </div>
            <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.year})} onClick={toggleVisibility('year')}>году выпуска</div>
        {visible.year && (
            <div className ={cn(styles.year,styles.radio)}>
                <div className={cn(styles.radio)}>
                <input className ={cn(styles.btnText)} name="radio-btn" type="radio" id="new" value="newest" onClick={onYearFilter}/>
                <label className={cn(styles.firstRadio)} htmlFor="new">Более новые</label>
                <input className ={cn(styles.btnText)} name="radio-btn" type="radio" id="old" value="oldest" onClick={onYearFilter}/>
                <label htmlFor="old">Более старые</label>
                </div>
            </div>
            )}
        </div>
        <div>
        <div className={cn(styles.button,styles.btnText,{[styles.isActive]:visible.genre})} onClick={toggleVisibility('genre')}>жанру</div>
        {visible.genre && (
            <div className ={cn(styles.list)}>
                <ul className={cn(styles.listActual)}>
                {genres.map((genre) => (
                        <li className ={cn(styles.listItem,styles.btnText)} key = {genre}>
                            <label className={cn(styles.listItem,styles.btnText)} id={genre}>
                                <input className={cn(styles.listInput)} id={genre} type="checkbox" onClick={onGenreFilter} value={genre}/>
                                    {genre}
                            </label>
                            </li>
                    ))}
                </ul>
            </div>
            )}
        </div>
        </div>
        </div>
    )
}