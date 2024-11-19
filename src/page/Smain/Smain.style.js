import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100vw;
  display: flex;
`;

export const Container = styled.div`
  width: calc(100vw - 210px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Schedule = styled.div`
  border-radius: 20px;
  background-color: #a18cd1;
  box-shadow: 3px 5px 3px 1px gainsboro;
  width: 45vw;
  height: 30vh;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
  color: white;
`;

export const Add = styled.span`
  cursor: pointer;
`;

export const ListBox = styled.div`
  height: 90%;
`;

export const SList = styled.div`
  border-radius: 10px;
  background-color: white;
  width: 95%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 10px 10px;

  div {
    margin-right: 15px;
  }
`;

export const Name = styled.div`
  border-radius: 10px 0 0 10px;
  background-color: #daadff;
  width: 100px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List_content = styled.div`
  flex: 1 1;
`;

export const Content = styled.div`
  width: 45vw;
  height: 40vh;
  border-radius: 20px;
  background-color: #a18cd1;
  box-shadow: 3px 5px 3px 1px gainsboro;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.div`
  border: none;
  border-radius: 15px;
  width: 50%;
  margin: 5px 30px 15px 30px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: baseline;

  input {
    width: 100%;
    border: none;
    padding: 10px;
    border-radius: 13px;
  }
  img {
    margin-left: 3px;
    margin-right: 10px;
  }
`;

export const ListBox2 = styled.div`
  border-radius: 10px 10px 0 0;
  width: 90%;
  height: 80%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #9b7df3;
  color: white;
  padding: 10px;
  text-align: center;
  font-weight: bold;
`;

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  color: #333;
  border-top: 1px solid #ddd;
  background-color: white;
`;
