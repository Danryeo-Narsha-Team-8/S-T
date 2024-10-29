import styled from "@emotion/styled"
import bg from '../../asset/image/bg.svg'


export const Box = styled.div`
    width: 416px;
    height: 200px;
    border-radius: 20px;
    padding: 15px;
    margin: 10px;

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

export const State_list = styled.div`
    display: flex;
    justify-content: space-around;
`

export const Loc = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    span{
        margin: 5px;
        font-size: x-large;
        font-weight: 500;
    }
`

export const State = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    span{
        margin: 5px;
        font-size: x-large;
        font-weight: 500;
    }
`

export const Com = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;

    span{
        margin: 5px;
        font-size: x-large;
        font-weight: 500;
    }
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