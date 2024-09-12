import styled from "styled-components";

export const InputContainer = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  margin-bottom: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
