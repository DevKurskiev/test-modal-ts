import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  background: #e6e7f9;
  border-radius: 5px;
  margin: ${(props: {center: boolean}) =>
    props.center ? "45vh auto auto auto" : "40px auto 0 auto"};
  transition: 0.3s;

  &:hover {
    background: #a0a1ad;
  }
`;

export const Item = styled.div`
  padding: 10px 15px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  user-select: none;
`;
