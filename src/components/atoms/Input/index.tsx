import React from "react";
import { InputContainer } from "./styles";

type InputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
