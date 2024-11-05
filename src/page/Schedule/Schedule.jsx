import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

import * as S from '../Schedule/Schedule.style'
import icon from '../../asset/image/schedule.svg'

const Schedule = () => {
  return (
    <S.Wrap>
      <Sidebar />
      <S.Container>
        <S.Head>
          <img src={icon} alt="icon" />
          <h1>일정추가</h1>
          <S.Bar></S.Bar>
        </S.Head>
        <S.Content>
          <S.Margin>
            <h2>선생님</h2>
            <S.InputBg>
              <S.InputText type="text" />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>할일</h2>
            <S.InputBg>
              <S.InputText type="text" />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>시작날짜(년, 월, 일)</h2>
            <S.InputBg>
              <S.InputDate type="text" />
              <S.InputDate type="text" />
              <S.InputDate type="text" />
            </S.InputBg>
          </S.Margin>
          <S.Margin>
            <h2>종료날짜(년, 월, 일)</h2>
            <S.InputBg>
              <S.InputDate type="text" />
              <S.InputDate type="text" />
              <S.InputDate type="text" />
            </S.InputBg>
          </S.Margin>
        </S.Content>
        <S.Buttons>
          <S.Button>취소</S.Button>
          <S.Button>추가</S.Button>
        </S.Buttons>
      </S.Container>
    </S.Wrap>
  )
}

export default Schedule
