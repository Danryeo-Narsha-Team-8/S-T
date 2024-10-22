import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'

import * as S from '../Main/Main.style'
import button from '../../asset/image/search.svg'

const Main = () => {
    const nowTime = () => {
        let now = new Date();
        let hour = String(now.getHours()).padStart(2, "0");
        let minute = String(now.getMinutes()).padStart(2, "0");
        return `${hour}:${minute}`
    };
    const nowDate = () => {
        let now = new Date();
        let year = String(now.getFullYear()).padStart(2, "0");
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let date = String(now.getDate()).padStart(2, "0");
        return `${year}/${month}/${date}`
    };

    const [time, setTime] = useState(nowTime)
    const [date, setDate] = useState(nowDate)

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(nowTime());
            setDate(nowDate());
        }, 1000);

        return () => clearInterval(timer)
    }, [])

    return (
        <S.Wrap>
            <Sidebar />
            <S.Container>
                <S.Clock>
                    <h1>{time}</h1>
                    <div>{date}</div>
                </S.Clock>
                <S.Schedule>
                    <S.Text>
                        <span>오늘 3개의 일정이 있어요!</span>
                        <span>+</span>
                    </S.Text>
                    <S.ListBox>
                        <S.SList>
                            <S.Name>선생님1</S.Name>
                            <div>content</div>
                            <div>date</div>
                        </S.SList>
                        <S.SList>
                            <S.Name>선생님2</S.Name>
                            <div>content</div>
                            <div>date</div>
                        </S.SList>
                        <S.SList>
                            <S.Name>선생님1</S.Name>
                            <div>content</div>
                            <div>date</div>
                        </S.SList>
                        <S.SList>
                            <S.Name>선생님2</S.Name>
                            <div>content</div>
                            <div>date</div>
                        </S.SList>
                    </S.ListBox>
                </S.Schedule>
                <S.Content>
                    <S.Input>
                        <S.Search placeholder='검색' />
                        <img src={button} alt="img" />
                    </S.Input>
                    <S.ListBox2>
                        <S.Head>
                            <div>이름</div>
                            <div>연락 가능 여부</div>
                            <div>위치</div>
                            <div>선생님 일정 추가</div>
                        </S.Head>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                        <S.List2>
                            <div>선생1</div>
                            <div>가능</div>
                            <div>1-2</div>
                            <div>일정추가</div>
                        </S.List2>
                    </S.ListBox2>
                </S.Content>
            </S.Container>
        </S.Wrap>
    )
}

export default Main
