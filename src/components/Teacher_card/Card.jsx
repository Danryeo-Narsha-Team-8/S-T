import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from '../Teacher_card/Card.style'

const Card = () => {
    const navigate = useNavigate()

    return (
        <S.Box>
            <S.Name>김상숙 선생님</S.Name>
            <S.State_list>
                <S.Loc>
                    위치
                    <span>미술실</span>
                </S.Loc>
                <S.State>
                    상태
                    <span>회의중</span>
                </S.State>
                <S.Com>
                    연락여부
                    <span>불가능</span>
                </S.Com>
            </S.State_list>
            <S.Button onClick={() => navigate('/Schedule')}>일정추가</S.Button>
        </S.Box>
    )
}

export default Card
