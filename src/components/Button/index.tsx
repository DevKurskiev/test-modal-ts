import React, {FC} from "react";

import { Container, Item } from "./styled";

interface IProps {
  text: string,
  onClick(): void,
  center: boolean
}

const Button: FC<IProps> = ({ text, onClick, center }) => {
  return (
    <Container onClick={onClick} center={center}>
      <Item>{text}</Item>
    </Container>
  );
}

export default Button;
