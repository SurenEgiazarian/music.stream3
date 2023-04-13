/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
import { themes, ThemeContext } from './contexts/theme';
import GlobalStyle from './globalStyles';
import * as S from './styles';
import { AppRoutes } from './routes';
// import {cookies} from './utils/cookies';

function App() {
    const [currentTheme, setCurrentTheme] = useState(themes.dark);
    const [themeName, setThemeName] = useState('dark');

    // const cookie = cookies.check('token');

    const toggleTheme = () => {
        if (currentTheme === themes.dark) {
            setCurrentTheme(themes.light);
            setThemeName('light');
            return;
        }

        setCurrentTheme(themes.dark);
        setThemeName('dark');
    };

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            <GlobalStyle theme={currentTheme} />
            <S.Wrapper>
                <AppRoutes />
            </S.Wrapper>
        </ThemeContext.Provider>
    );
}

export default App;
