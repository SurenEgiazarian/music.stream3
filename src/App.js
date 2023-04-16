import './fonts/stylesheet.css';
import Styles from './css/style.module.css'
import { AppRoutes } from './routes';
import { ThemeContext, themes } from './components/theme/theme';
import { useEffect, useState } from 'react';
import { useRefreshTokenMutation} from './store/services';
import { setToken } from './store/slices/auth';
import { useDispatch } from 'react-redux';
import getCookie from './utils/getCookie';
import { BottomPlayer } from './components/bottomPlayer/bottomPlayer';



function App() {
  const [theme, setTheme] = useState(themes.dark);
  const [refreshToken, {data, isSuccess}]= useRefreshTokenMutation();
  const refresh = getCookie('tokenRefresh'); // useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    if(refresh) {
      refreshToken({refresh});
    }     
  }, [])


  useEffect(() => {
    if(isSuccess) {
      dispatch(setToken(data?.access));
      document.cookie = `tokenAccess=${data?.access}`
    }
  }, [data, isSuccess])


  return (
    <ThemeContext.Provider value = {{
      theme: theme,
      toggleTheme: () => {
        setTheme(theme.name !== 'light' ? themes.light : themes.dark)
      }       
    }}>
        <div className= {`${Styles.wrapper} ${Styles[theme.name]}`}>
          <div className={`${Styles.container} ${Styles[theme.name]}`}>
            <AppRoutes />
            <BottomPlayer/>
          </div>
      </div>
    </ThemeContext.Provider>
  )
  
}
export default App;

