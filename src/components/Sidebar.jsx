import React from 'react'
import * as S from '../components/Sidebar.style'

import logo from '../asset/image/logo.svg'
import st from '../asset/image/S-T.svg'
import teacher from '../asset/image/teacher2.svg'
import setting from '../asset/image/setting.svg'

const Sidebar = () => {
    return (
        <>
            <S.Wrap>
                <S.Head>
                    <img src={logo} alt="logo" />
                    <img src={st} alt="name" />
                </S.Head>
                <S.Container>
                    <S.Button>
                        <img src={teacher} alt="teacher-logo" />
                        <S.BtnText>선생님</S.BtnText>
                    </S.Button>
                    <S.Button>
                        <img src={setting} alt="setting-logo" />
                        <S.BtnText>프로필</S.BtnText>
                    </S.Button>
                </S.Container>
                <div>
                    <div>img</div>
                    <div>랄슨즈</div>
                </div>
            </S.Wrap>
        </>
    )
}

export default Sidebar;
