import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../src/page/Main/Main'
import Info from '../src/page/Info/Info'
import Schedule from '../src/page/Schedule/Schedule'
import Profile from '../src/page/profile/profile'
import T_main from '../src/page/T_main/T_main'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/Info' element={<Info/>} />
            <Route path='/Schedule' element={<Schedule/>} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/T_main' element={<T_main />} />
        </Routes>
    )
}

export default Router
