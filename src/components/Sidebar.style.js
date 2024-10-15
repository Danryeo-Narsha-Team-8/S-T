import styled from "@emotion/styled";

export const Wrap = styled.div`
    margin: 0;
    width: 210px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to bottom, #9B6DC7, #FFACAC);
`

export const Head = styled.div`
    display: flex;
    margin: 10px 0;
    justify-content: space-around;
    height: 70px;

    img{
        width: 60px;
    }
`

export const Container = styled.div`
    align-self: flex-end;
    width: 90%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Button = styled.div`
    border-radius: 25px 0 0 25px;
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 20px;
    /* background-color: white; 클릭시 변경 */ 

    img{
        width: 25px;
    }
`

export const BtnText = styled.span`
    margin: 0 20px;
    color: white;
    font-weight: 600;
`

