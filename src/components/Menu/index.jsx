/* eslint-disable no-debugger */
// import { useSelector } from "react-redux";
// import { userSelector } from '../../store/selectors/user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import menu from '../../data/menuInfo.json';
import * as S from './styles';
import ThemeSwitcher from '../ThemeSwitcher';
import { cookies } from '../../utils/cookies';
import { logout } from '../../store/actions/thunks/user';

function Menu() {
    const cookie = cookies.check('token');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    // const user = useSelector(userSelector);
    // console.log(`user.id=${  user.id}`);

    const listItems = menu.map(({ value, href, id }) => {
        let onClick = (e) => {
            e.preventDefault();
            dispatch(logout());
            navigate('/login');
        };

        if ((cookie && value === 'Войти') || (!cookie && value === 'Выйти')) {
            return null;
        }

        if (value !== 'Выйти') {
            onClick = null;
        }

        return (
            <S.MenuItem key={id}>
                <S.MenuLink to={href} onClick={onClick}>
                    {value}
                </S.MenuLink>
            </S.MenuItem>
        );
    });

    return (
        <div>
            <S.MenuList>{listItems}</S.MenuList>
            <ThemeSwitcher />
        </div>
    );
}

export default Menu;
