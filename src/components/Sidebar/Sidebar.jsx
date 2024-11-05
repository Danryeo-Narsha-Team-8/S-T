import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from '../Sidebar/Sidebar.style'
import logo from '../../asset/image/logo.svg'
import st from '../../asset/image/S-T.svg'
import teacher from '../../asset/image/teacher2.svg'
import setting from '../../asset/image/setting.svg'
import profile from '../../asset/image/profile.svg'

const Sidebar = () => {
    const navigate = useNavigate();

    return (
        <>
            <S.Wrap>
                <S.Content>
                    <S.Head onClick={() => navigate('/')}>
                        <img src={logo} alt="logo" />
                        <img src={st} alt="name" />
                    </S.Head>
                    <S.Container>
                        <S.Button onClick={() => navigate('/Info')}>
                            <img src={teacher} alt="teacher-logo" />
                            <S.BtnText>선생님</S.BtnText>
                        </S.Button>
                        <S.Button onClick={() => navigate('/Profile')}>
                            <img src={setting} alt="setting-logo" />
                            <S.BtnText>프로필</S.BtnText>
                        </S.Button>
                    </S.Container>
                </S.Content>
                <S.Bottom>
                    <img src={profile} alt='profile' />
                    <div>랄슨즈</div>
                </S.Bottom>
            </S.Wrap>
        </>
    )
}

export default Sidebar;
