import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from '../src/page/Main/Main'
import Info from '../src/page/Info/Info'
import Schedule from '../src/page/Schedule/Schedule'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/Info' element={<Info/>} />
            <Route path='/Schedule' element={<Schedule/>} />
        </Routes>
    )
}

export default Router
