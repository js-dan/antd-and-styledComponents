import styled from 'styled-components';
import { Checkbox, Form } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  border-radius: 15px;
  border: solid 2px ${(props) => props.theme.colors.border};
  padding: 20px 0;
`
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backgroundPage};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
  font-size: 40px;
  font-weight: bold;
`

export const CheckboxStyled = styled(Checkbox)`
  color: ${(props) => props.theme.colors.text};
`

export const FormStyled = styled(Form)`
  label{
    color: ${(props) => props.theme.colors.text};
  }
  .ant-form-item-label > label.ant-form-item-required:not(.ant-form-item-required-mark-optional)::before{
    color: ${(props) => props.theme.colors.border};
  }
`