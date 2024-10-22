import styled from "@emotion/styled";

export const Wrap = styled.div`
    width: 100vw;
    display: flex;
`

export const Container = styled.div`
    width: calc(100vw - 210px);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

export const Clock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;

    h1{
        margin: 10px;
    }
`



export const Schedule = styled.div`
    border-radius: 20px;
    background-color: #A18CD1;
    box-shadow: 2px 1px 3px 1px gray;
    width: 45vw;
    height: 30vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px 0;
    color: white;
`

export const ListBox = styled.div`
    height: 90%;
`

export const SList = styled.div`
    border-radius: 10px;
    background-color: white;
    width: 95%;
    height: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 10px 0;

    div{
        margin-right: 15px;
    }
`

export const Name = styled.div`
    border-radius: 10px 0 0 10px;
    background-color: #DAADFF;
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 45vw;
    height: 40vh;
    border-radius: 20px;
    background-color: #A18CD1;
    box-shadow: 2px 1px 3px 1px gray;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.div`
    border: none;
    border-radius: 15px;
    width: 13vw;
    margin: 5px 30px 15px 30px;
    padding: 5px 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: baseline;
`

export const Search = styled.input`
    border: none;
    border-radius: 15px;
    width: 70%;
    height: 100%;
`

export const ListBox2 = styled.div`
    border-radius: 10px 10px 0 0;
    width: 90%;
    height: 80%;
    overflow-y: auto;

    &::-webkit-scrollbar{
        display: none;
    }
`

export const Head = styled.div`
    border-radius: 10px 10px 0 0;
    background-color: #9B7DF3;
    color: white;
    height: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    div{
        margin-left: 20px;
    }
`

export const List2 = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    height: 15%;
    border-bottom: 1px solid lightgray;
`