import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { Playlist } from './pages/playlist';
import { NotFound } from './pages/not-found';
import { ProtectedRoute } from './components/ProtectedRoute';
import { cookies } from './utils/cookies';
// import { authAPI } from './api/api';

export function AppRoutes() {
    const [isAllowed, setIsAllowed] = useState(cookies.check('token'));
    const setIsAllowedHandler = () => {
        setIsAllowed(cookies.check('token'));
    };

    // ('Ktotolya', 'bagrov.anatoli@gmail.com', 'Skypro-Music')
    // {"refresh":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2ODE3MTk4NywiaWF0IjoxNjY4MDg1NTg3LCJqdGkiOiJiNzBjYjFlODNkM2M0YzMzOTc1Y2U2MzViMWU5ODQ0OCIsInVzZXJfaWQiOjMxfQ.giDkSYEAkjjdicreGshSvjNohCIV1D0zgGddwhnQxiY","access":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY4MDg1ODg3LCJpYXQiOjE2NjgwODU1ODcsImp0aSI6ImRkMmQyOGMyZTQ2MTRlZTViMTNhMzBmMDBmN2I2OGNjIiwidXNlcl9pZCI6MzF9.cHLehDtVgaSxwi6AoSmLui0LzfKsP2OgjMxH3MxM9rQ"}

    // authAPI.signup('KtotolyaTest3', 'test@test3.com', 'Music-Test3').then((response) => {
    //     console.log(response);
    // });

    return (
        <Routes>
            <Route
                path="/login"
                element={<Login setIsAllowedHandler={setIsAllowedHandler} />}
            />
            <Route path="/signup" element={<Signup />} />

            <Route
                element={
                    <ProtectedRoute
                        redirectPath="/login"
                        isAllowed={isAllowed}
                    />
                }
            >
                <Route path="/" element={<Main />} />
                <Route path="/my-tracks" element={<Playlist id="0" />} />
                <Route path="/playlist/:id" element={<Playlist />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
