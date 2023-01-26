import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import Form from "./components/Form";

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const params = new URLSearchParams(window.location?.search);

  return (
    <>
      <Button onClick={() => setModalShow(true)} text="Нажми на меня!" center />
      <Modal show={modalShow}>
        <Form
          header={params.get("title") || "Форма обратной связи"}
          message={params.get("text") || ""}
          setModalShow={setModalShow}
        />
      </Modal>
    </>
  );
}

export default App;
