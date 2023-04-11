import Moon from '../Moon';
import Sun from '../Sun';
import { useThemeContext } from '../../contexts/theme';
import * as S from './styles';

function ThemeSwitcher() {
    const { themeName, toggleTheme } = useThemeContext();

    const themeIkon = themeName === 'dark' ? <Moon /> : <Sun />;

    return (
        <S.Button type="button" onClick={toggleTheme}>
            {themeIkon}
        </S.Button>
    );
}

export default ThemeSwitcher;
