import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "styles/themes/default";
import { Layout } from "components";
import GlobalStyle from "styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
