import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Container = styled.div`
  width: 80%;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.div`
  border: 1px solid;
  border-radius: 17px;
  width: 70%;
  padding-left: 10px;
  margin: 20px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 15px;
  }
`;

export const Teacher = styled.div`
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 75%;
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;