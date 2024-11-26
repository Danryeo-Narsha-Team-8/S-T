import styled from "@emotion/styled";

export const Wrap = styled.div`
  margin: 0;
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: linear-gradient(to bottom, #9b6dc7, #ffacac);
`;

export const Head = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-evenly;
  height: 70px;
  cursor: pointer;

  img {
    width: 70px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  align-self: flex-end;
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  border-radius: 25px 0 0 25px;
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 20px;
  cursor: pointer;
  /* background-color: white; 클릭 시 변경 */

  img {
    width: 25px;
  }
`;

export const BtnText = styled.span`
  margin: 0 20px;
  color: white;
  /* color: black; 클릭 시 변경 */
  font-weight: 600;
`;

export const Bottom = styled.div`
  margin: 40px auto;
  border-radius: 25px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  background-color: white;

  div {
    font-weight: 600;
  }
`;
