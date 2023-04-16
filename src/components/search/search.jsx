import styles from './search.module.css'
import { useThemeContext } from '../theme/theme';
import { SearchIcon } from '../icons.jsx'
import { search } from '../../store/slices/search';
import { useDispatch } from 'react-redux';
import cn from 'classnames'

export function SearchBar() {
    const {theme} = useThemeContext();
    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        dispatch(search((e.target).value));
      };
    return (
    <div className={cn(styles.search,styles[theme.name])}>
    <svg className={cn(styles.searchSvg)}>
            <SearchIcon className={cn(styles[theme.color])} />
    </svg>
    <input className={cn(styles.searchText)} type="search" placeholder="Поиск" name="search" autoComplete='off' onChange={onChangeHandler}/>
</div>
    )
}