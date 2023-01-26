import React, { useState, FC, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../Button";
import {
  Container,
  Header,
  Item,
  ItemNumber,
  ItemMessage,
  Exit,
} from "./styles";

interface IProps {
  header: string
  message: string
  setModalShow(text: boolean): void
}
interface Data {
  number: string,
  name: string,
  message: string
}

const Form: FC<IProps> = ({ header, message, setModalShow }) => {
  const [data, setData] = useState<Data>({ number: "", name: "", message });

  const handleChangedData = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    id === "number"
      ? setData({ ...data, number: e.target.value.replace(/[^+\d]/g, "") })
      : setData({ ...data, [id]: e.target.value.trim() });
  };

  const handleSendData = () => {
    let hasError = false;

    for (const key in data) {
      if (data[key as keyof Data].length === 0) {
        hasError = true;
        break;
      } else {
        hasError = false;
      }

      if (key !== "number" && data[key as keyof Data].match(/[@#\$%\^&\*\)\(\+=_]+/gm)) {
        hasError = true;
        break;
      }
    }

    hasError
      ? toast.error("Заполните все поля корректно!")
      : toast.success("Форма успешно отправлено!");
  };

  return (
    <Container>
      <Exit onClick={() => setModalShow(false)}>Закрыть</Exit>
      <Header>{header}</Header>
      <ItemNumber
        onChange={(e: React.ChangeEvent<any>): void => handleChangedData(e, "number")}
        mask="+7(999) 999-99-99"
        placeholder="Номер телефона"
        value={data.number}
      />
      <Item
        onChange={(e: React.ChangeEvent<any>): void => handleChangedData(e, "name")}
        placeholder="Имя"
        type="text"
        value={data.name}
      />
      <ItemMessage
        onChange={(e: React.ChangeEvent<any>): void => handleChangedData(e, "message")}
        placeholder="Сообщение"
        value={data.message}
      />
      <Button text="Отправить" onClick={handleSendData} center={false} />

      <ToastContainer limit={3} autoClose={1500} />
    </Container>
  );
}

export default Form;
