import styled from "styled-components";
import InputMask from "react-input-mask";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #1b1c23;
  padding: 30px 20px;
  border-radius: 10px;
  position: relative;
`;

export const Item = styled.input`
  margin-top: 15px;
  outline: none;
  width: 315px;
  height: 30px;
  font: 20px "Roboto", sans-serif;
  color: #1b1c23;
  border: none;
  background: #fff;
  padding: 0 5px;
  border-radius: 3px;

  &::placeholder {
    color: #1b1c23;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const ItemNumber = styled(InputMask)`
  margin-top: 15px;
  outline: none;
  width: 315px;
  height: 30px;
  font: 20px "Roboto", sans-serif;
  color: #1b1c23;
  border: none;
  background: #fff;
  padding: 0 5px;
  border-radius: 3px;

  &::placeholder {
    color: #1b1c23;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const ItemMessage = styled.textarea`
  margin-top: 15px;
  outline: none;
  min-width: 315px;
  max-width: 315px;
  height: 30px;
  height: 150px;
  font: 20px "Roboto", sans-serif;
  color: #1b1c23;
  border: none;
  background: #fff;
  padding: 0 5px;
  border-radius: 3px;

  &::placeholder {
    color: #1b1c23;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Header = styled.h1`
  font: 25px "Roboto", sans-serif;
  color: #fff;
  text-align: center;
  margin: 0 0 15px 0;
`;

export const Exit = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  font: 15px "Roboto", sans-serif;
  color: #fff;
  right: -35px;
  top: -15px;
  cursor: pointer;
`;
