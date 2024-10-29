import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Clock from '../../components/Clock/Clock'

import * as S from '../Main/Main.style'
import button from '../../asset/image/search.svg'

const Main = () => {

    return (
        <S.Wrap>
            <Sidebar />
            <S.Container>
                <Clock />
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
                        <S.Table>
                            <thead>
                                <tr>
                                    <S.Th>이름</S.Th>
                                    <S.Th>연락 가능 여부</S.Th>
                                    <S.Th>위치</S.Th>
                                    <S.Th>선생님 일정 추가</S.Th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <S.Td>선생1</S.Td>
                                    <S.Td>가능</S.Td>
                                    <S.Td>1-2</S.Td>
                                    <S.Td>일정추가</S.Td>
                                </tr>
                                <tr>
                                    <S.Td>선생1</S.Td>
                                    <S.Td>가능</S.Td>
                                    <S.Td>1-2</S.Td>
                                    <S.Td>일정추가</S.Td>
                                </tr>
                                <tr>
                                    <S.Td>선생1</S.Td>
                                    <S.Td>가능</S.Td>
                                    <S.Td>1-2</S.Td>
                                    <S.Td>일정추가</S.Td>
                                </tr>
                                <tr>
                                    <S.Td>선생1</S.Td>
                                    <S.Td>가능</S.Td>
                                    <S.Td>1-2</S.Td>
                                    <S.Td>일정추가</S.Td>
                                </tr>
                                <tr>
                                    <S.Td>선생1</S.Td>
                                    <S.Td>가능</S.Td>
                                    <S.Td>1-2</S.Td>
                                    <S.Td>일정추가</S.Td>
                                </tr>
                            </tbody>
                        </S.Table>
                    </S.ListBox2>
                </S.Content>
            </S.Container>
        </S.Wrap>
    )
}

export default Main
