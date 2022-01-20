import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';
import { Container } from './styles/style';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        Commit inicial
      </Container>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
