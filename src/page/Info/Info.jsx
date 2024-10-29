import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Clock from '../../components/Clock/Clock'
import Card from '../../components/Teacher_card/Card'

import button from '../../asset/image/search.svg'
import * as S from '../Info/Info.style'

const Info = () => {

    return (
        <S.Wrap>
            <Sidebar />
            <S.Container>
                <Clock />
                <S.Input>
                    <img src={button} alt="" />
                    <input type="text" placeholder='검색' />
                </S.Input>
                <S.Teacher>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </S.Teacher>
            </S.Container>
        </S.Wrap>
    )
}

export default Info
