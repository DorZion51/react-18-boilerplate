import { Button, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RootState } from './DAL/redux/Store';
import { toggleDarkMode } from './DAL/redux/slices/Slice2';
import { SomeScreen2 } from './screens/some-screen-2/SomeScreen2';
import { SomeScreen } from './screens/some-screen/SomeScreen';
import { darkTheme } from './theme/DarkTheme';
import { lightTheme } from './theme/LightTheme';

const App = () => {
    const dispatch = useDispatch();
    const slice2 = useSelector((state: RootState) => state.Slice2);
    const changeDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <ThemeProvider theme={slice2.darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Button onClick={changeDarkMode}>Change Mode</Button>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/some-screen" element={<SomeScreen someProps={77777} />} />
                    <Route path="/some-screen2" element={<SomeScreen2 someProps={7777777} />} />

                    {/* Handle 404 - Not Found */}
                    <Route path="*" element={<div>404 - Not Found</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
