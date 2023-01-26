import React, { FC } from "react";

import { Container } from "./styles";

interface IProps {
  show: boolean
  children: JSX.Element
}

const Modal: FC<IProps> = ({ show, children }) => {
  return <Container show={show}>{children}</Container>;
}

export default Modal;
