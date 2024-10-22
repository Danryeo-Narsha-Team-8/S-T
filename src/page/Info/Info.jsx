import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Clock from '../../components/Clock/Clock'

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
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                    <S.Box>
                        <S.Name>김상숙 선생님</S.Name>
                        <S.State>
                            <S.Default>
                                <div>위치</div>
                                <div>상태</div>
                                <div>연락여부</div>
                            </S.Default>
                            <S.Current>
                                <div>미술실</div>
                                <div>회의중</div>
                                <div>불가능</div>
                            </S.Current>
                        </S.State>
                        <S.Button>일정추가</S.Button>
                    </S.Box>
                </S.Teacher>
            </S.Container>
        </S.Wrap>
    )
}

export default Info
