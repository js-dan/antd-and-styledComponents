import React from 'react';
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global';
import { CheckboxStyled, Container, FormStyled, PageContainer, Title } from './styles/style';
import { theme } from './styles/theme';
import { 
  ConfigProvider, 
  Form, 
  Input, 
  Button, 
  Checkbox 
} from 'antd'
import ptBR from 'antd/lib/locale/pt_BR';
import 'antd/dist/antd.css';

function App() {
  return (
    <ConfigProvider locale={ptBR}>
      <ThemeProvider theme={theme}>
        <PageContainer>
          <Container>
            <Title>
              Login
            </Title>
            <FormStyled>
              <Form.Item
                label="Nome"
                name="name"
                rules={
                  [{
                    required: true,
                    message: 'Campo obrigatório'
                  }]
                }
              >
                <Input/>
              </Form.Item>
              <Form.Item
                label="Senha"
                name="senha"
                rules={
                  [{
                    required: true,
                    message: 'Campo obrigatório'
                  }]
                }
              >
                <Input.Password/>
              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
              >
                <CheckboxStyled>Manter Logado</CheckboxStyled>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Entrar
                </Button>
              </Form.Item>
            </FormStyled>
          </Container>
        </PageContainer>
        <GlobalStyle/>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
