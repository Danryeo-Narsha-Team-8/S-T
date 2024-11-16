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

export const Head = styled.div`
  width: 90%;
  margin: 50px;

  img {
    float: left;
    margin: 10px;
  }
  h1 {
    margin: 25px;
  }
`;

export const Bar = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 20px;
  background-color: #907def;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Margin = styled.div`
  margin-right: 150px;

  &:nth-child(2),
  :nth-child(4) {
    margin-right: 50px;
  }
`;

export const InputText = styled.input`
  border: none;
  border-bottom: 3px solid #d9d9d9;
  font-size: 20px;
  width: 330px;
  padding: 15px;
  padding-bottom: 0;
  padding-left: 5px;
  margin: 15px 25px;
  background-color: transparent;
`;

export const InputBg = styled.div`
  background-color: #f9f8f8;
  border-radius: 10px;
  display: flex;
`;

export const InputDate = styled.input`
  border: none;
  border-bottom: 3px solid #d9d9d9;
  font-size: 20px;
  width: 74px;
  padding: 15px;
  padding-bottom: 0;
  margin: 15px;
  background-color: transparent;
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  height: 55px;
  margin: 50px;
  border: none;
  border-radius: 10px;
  background-color: #907def;
  font-size: 20px;
  color: white;
  font-weight: 500;
`;
