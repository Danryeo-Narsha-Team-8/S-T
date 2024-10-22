import styled from "@emotion/styled";
import bg from '../../asset/image/bg.svg'


export const Wrap = styled.div`
    width: 100vw;
    display: flex;
`

export const Container = styled.div`
    width: calc(100vw - 210px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
`

export const Input = styled.div`
    border: 1px solid;
    border-radius: 15px;
    width: 70%;
    padding: 10px;
    margin: 20px;
    display: flex;
    align-items: center;

    input{
        width: 100%;
        height: 100%;
        border: none;
        padding: 10px;
    }
`

export const Teacher = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
    height: 100%;
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const Box = styled.div`
    width: calc(45% - 40px);
    height: 35%;
    border-radius: 20px;
    padding: 20px;
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: no-repeat;
    background-size: cover;
    background-image: url(${bg});
`

export const Name = styled.div`
    font-size: 24px;
    font-weight: 600;
    color: white;
`

export const State = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Default = styled.div`
    display: flex;
    align-items: flex-end;
`

export const Current = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Button = styled.div`
    align-self: flex-end;
    background-color: white;
    border-radius: 15px;
    padding: 7px 30px;
    color: #8E5CF7;
    font-weight: 700;
`
