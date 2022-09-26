import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />;
        </ThemeProvider>
    );
}

export default MyApp;
